import React, { type ForwardedRef, forwardRef, useImperativeHandle, useMemo } from "react";
import type { FormProps } from "musae/types/form";
import { type FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { useMounted } from "@aiszlab/relax";
import { CLASS_NAMES, CONTEXT_VALUE, Context } from "./context";
import { useForm } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names.component";
import { stringify } from "@aiszlab/relax/class-name";

const Form = forwardRef(
  <T extends FieldValues>(
    {
      onSubmit,
      onChange,
      labelCol,
      wrapperCol,
      children,
      className,
      style,
      ...props
    }: FormProps<T>,
    ref: ForwardedRef<UseFormReturn<T>>,
  ) => {
    const classNames = useClassNames(CLASS_NAMES);
    // use react hook form
    const form = useForm(props.form);

    useImperativeHandle(ref, () => {
      return form;
    });

    const submit = form.handleSubmit((values) => {
      onSubmit?.(values);
    });

    useMounted(() => {
      const watched = form.watch((values, { type }) => {
        type === "change" && onChange?.(values);
      });

      return () => {
        watched.unsubscribe();
      };
    });

    // context value
    const contextValue = useMemo(() => {
      return {
        ...CONTEXT_VALUE,
        ...(!!labelCol && {
          labelCol,
        }),
        ...(!!wrapperCol && {
          wrapperCol,
        }),
        classNames,
      };
    }, [labelCol, wrapperCol, classNames]);

    return (
      <Context.Provider value={contextValue}>
        <FormProvider {...form}>
          <form className={stringify(classNames.form, className)} style={style} onSubmit={submit}>
            {children}
          </form>
        </FormProvider>
      </Context.Provider>
    );
  },
);

export default Form;
