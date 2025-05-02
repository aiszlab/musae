import type { FormItemProps } from "../../types/form";
import React from "react";
import { Field, Layout } from "./field";
import type { FieldValues } from "react-hook-form";
import { stringify } from "@aiszlab/relax/class-name";
import Supporting from "./field/supporting";
import { useFormContext } from "./context";

/**
 * @description
 * item render
 */
const Item = <T extends FieldValues = FieldValues>({
  required = false,
  className,
  style,
  supporting,
  ...props
}: FormItemProps<T>) => {
  const { classNames } = useFormContext();

  if (props.name) {
    return (
      <Field {...props} className={className} style={style} name={props.name} required={required} />
    );
  }

  return (
    <Layout
      label={props.label}
      labelCol={props.labelCol}
      wrapperCol={props.wrapperCol}
      supporting={!!supporting && <Supporting>{supporting}</Supporting>}
      required={required}
      space
      className={classNames.item}
    >
      <div className={stringify(classNames.field, className)} style={style}>
        {props.children}
      </div>
    </Layout>
  );
};

export default Item;
