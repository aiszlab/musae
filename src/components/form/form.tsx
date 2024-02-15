import React, { type ForwardedRef, forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import type { ContextValue, FormProps, FormRef } from "./types";
import { useForm, type FieldValues, FormProvider, type FieldErrors, type FieldPath } from "react-hook-form";
import { isUndefined } from "@aiszlab/relax";
import Context, { CONTEXT_VALUE } from "./context";

const Form = forwardRef(
  <T extends FieldValues = FieldValues>(
    { onSubmit, onChange, labelCol, wrapperCol, children }: FormProps<T>,
    ref: ForwardedRef<FormRef<T>>
  ) => {
    /// use react hook form
    const { handleSubmit, watch, ...methods } = useForm<T>({
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
      return handleSubmit((values) => {
        onSubmit?.(values);
      });
    }, [onSubmit, handleSubmit]);

    useEffect(() => {
      const subscription = watch((values, { type }) => {
        type === "change" && onChange?.(values);
      });

      return () => {
        subscription.unsubscribe();
      };
    }, [onChange, watch]);

    /// context value
    const contextValue = useMemo<ContextValue>(() => {
      return {
        ...CONTEXT_VALUE,
        ...(!!labelCol && {
          labelCol,
        }),
        ...(!!wrapperCol && {
          wrapperCol,
        }),
      };
    }, [labelCol, wrapperCol]);

    return (
      <Context.Provider value={contextValue}>
        <FormProvider handleSubmit={handleSubmit} watch={watch} {...methods}>
          <form onSubmit={_submit}>{children}</form>
        </FormProvider>
      </Context.Provider>
    );
  }
);

export default Form;
