import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import { ContextValue, FormProps, FormRef } from "./types";
import { useForm, type FieldValues, FormProvider, FieldErrors, FieldPath } from "react-hook-form";
import { isVoid } from "../../utils/undefined";
import Context, { DEFAULT_CONTEXT_VALUE } from "./context";

const Form = forwardRef(<T extends FieldValues = FieldValues>(props: FormProps<T>, ref: ForwardedRef<FormRef<T>>) => {
  /// use react hook form
  const methods = useForm<T>({
    mode: "all",
  });

  useImperativeHandle(ref, () => {
    const getFieldsError: FormRef<T>["getFieldsError"] = (namePaths) => {
      if (isVoid(namePaths)) {
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
      props.onSubmit?.(values);
    });
  }, [props.onSubmit, methods.handleSubmit]);

  useEffect(() => {
    const subscription = methods.watch((values, { type }) => {
      type === "change" && props.onChange?.(values);
    });

    return subscription.unsubscribe;
  }, [props.onChange, methods.watch]);

  /// context value
  const contextValue = useMemo<ContextValue>(() => {
    return Object.assign({}, DEFAULT_CONTEXT_VALUE, {
      ...(!!props.labelCol && {
        labelCol: props.labelCol,
      }),
      ...(!!props.wrapperCol && {
        wrapperCol: props.wrapperCol,
      }),
    });
  }, []);

  return (
    <Context.Provider value={contextValue}>
      <FormProvider {...methods}>
        <form onSubmit={_submit}>{props.children}</form>
      </FormProvider>
    </Context.Provider>
  );
});

export default Form;
