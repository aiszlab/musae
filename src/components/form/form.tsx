import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import { ContextValue, FormProps, FormRef } from "./types";
import { useForm, type FieldValues, FormProvider, FieldErrors, FieldPath } from "react-hook-form";
import { isUndefined } from "@aiszlab/relax";
import Context, { DEFAULT_CONTEXT_VALUE } from "./context";
import { StyledForm } from "./styled";

const Form = forwardRef(
  <T extends FieldValues = FieldValues>(
    { onSubmit, onChange, labelCol, wrapperCol, children }: FormProps<T>,
    ref: ForwardedRef<FormRef<T>>
  ) => {
    /// use react hook form
    const methods = useForm<T>({
      mode: "all",
    });

    useImperativeHandle(ref, () => {
      const getFieldsError: FormRef<T>["getFieldsError"] = (namePaths) => {
        if (isUndefined(namePaths)) {
          return methods.formState.errors;
        }

        return namePaths.reduce<FieldErrors<T>>((prev, namePath) => {
          const error = methods.getFieldState(namePath).error;
          if (!error) return prev;
          prev[namePath] = error as FieldErrors<T>[FieldPath<T>];
          return prev;
        }, {});
      };

      const getFieldError: FormRef<T>["getFieldError"] = (namePath) => methods.getFieldState(namePath).error;

      return {
        validate: methods.trigger,
        getFieldsError,
        getFieldError,
        getValues: methods.getValues,
      };
    });

    const _submit = useMemo(() => {
      return methods.handleSubmit((values) => {
        onSubmit?.(values);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onSubmit, methods.handleSubmit]);

    useEffect(() => {
      const subscription = methods.watch((values, { type }) => {
        type === "change" && onChange?.(values);
      });

      return subscription.unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onChange, methods.watch]);

    /// context value
    const contextValue = useMemo<ContextValue>(() => {
      return Object.assign({}, DEFAULT_CONTEXT_VALUE, {
        ...(!!labelCol && {
          labelCol,
        }),
        ...(!!wrapperCol && {
          wrapperCol,
        }),
      });
    }, [labelCol, wrapperCol]);

    return (
      <Context.Provider value={contextValue}>
        <FormProvider {...methods}>
          <StyledForm onSubmit={_submit}>{children}</StyledForm>
        </FormProvider>
      </Context.Provider>
    );
  }
);

export default Form;
