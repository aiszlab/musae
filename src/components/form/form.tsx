import React, { type ForwardedRef, forwardRef, useImperativeHandle, useMemo } from "react";
import type { ContextValue, FormProps } from "./types";
import { type FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { useEvent, useMounted } from "@aiszlab/relax";
import Context, { CONTEXT_VALUE } from "./context";
import { useForm } from "./hooks";

const Form = forwardRef(
  <T extends FieldValues>(
    { onSubmit, onChange, labelCol, wrapperCol, children, ...props }: FormProps<T>,
    ref: ForwardedRef<UseFormReturn<T>>
  ) => {
    /// use react hook form
    const form = useForm(props.form);

    useImperativeHandle(ref, () => {
      return form;
    });

    const submit = useEvent(() => {
      return form.handleSubmit((values) => {
        onSubmit?.(values);
      });
    });

    useMounted(() => {
      const watched = form.watch((values, { type }) => {
        type === "change" && onChange?.(values);
      });

      return () => {
        watched.unsubscribe();
      };
    });

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
        <FormProvider {...form}>
          <form onSubmit={submit}>{children}</form>
        </FormProvider>
      </Context.Provider>
    );
  }
);

export default Form;
