import type { FormItemProps } from "musae/types/form";
import React from "react";
import { Field, Layout } from "./field";
import type { FieldValues } from "react-hook-form";
import { useClassNames } from "../../hooks/use-class-names";
import { clsx } from "@aiszlab/relax";
import { FormClassToken } from "../../utils/class-name";

/**
 * @description
 * item render
 */
const Item = <T extends FieldValues = FieldValues>({
  required = false,
  className,
  style,
  ...props
}: FormItemProps<T>) => {
  const classNames = useClassNames("form");

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
      required={required}
      space
      className={classNames[FormClassToken.Item]}
    >
      <div className={clsx(classNames[FormClassToken.Field], className)} style={style}>
        {props.children}
      </div>
    </Layout>
  );
};

export default Item;
