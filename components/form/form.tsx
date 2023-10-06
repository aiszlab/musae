import React, { ForwardedRef, forwardRef, useEffect, useMemo } from "react";
import { FormProps, Form } from "./types";
import { useForm, type FieldValues, FormProvider } from "react-hook-form";
import { Input } from "../input";

const Form = forwardRef(<T extends FieldValues = FieldValues>(props: FormProps<T>, ref: ForwardedRef<Form>) => {
  /// use react hook form
  const methods = useForm<T>();

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

  return (
    <FormProvider {...methods}>
      <form onSubmit={_submit} onChange={(e) => {}}>
        {props.children}
      </form>
    </FormProvider>
  );
});

export default Form;
