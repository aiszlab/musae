import { FormItemProps } from "./types";
import React from "react";
import { Field, Layout } from "./field";
import type { FieldValues } from "react-hook-form";

/**
 * @description
 * item render
 */
const Item = <T extends FieldValues = FieldValues>({ required = false, ...props }: FormItemProps<T>) => {
  if (props.name) {
    return <Field {...props} name={props.name} required={required} />;
  }

  return (
    <Layout label={props.label} labelCol={props.labelCol} wrapperCol={props.wrapperCol} required={required} space>
      {props.children}
    </Layout>
  );
};

export default Item;
