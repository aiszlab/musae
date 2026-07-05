import type { FieldsValue, FormItemProps } from "../../types/form";
import React, { useContext } from "react";
import { Field, Layout } from "./field";
import { stringify } from "@aiszlab/relax/class-name";
import Supporting from "./field/supporting";
import Context from "./context";

/**
 * @description
 * item render
 */
const Item = <T extends FieldsValue, FieldKey extends keyof T>({
  required = false,
  className,
  style,
  supporting,
  ...props
}: FormItemProps<T, FieldKey>) => {
  const { classNames } = useContext(Context);

  if (props.name) {
    return (
      <Field<T, FieldKey>
        {...props}
        className={className}
        style={style}
        name={props.name}
        required={required}
      />
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
