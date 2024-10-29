import type { FormItemProps } from "musae/types/form";
import React, { useContext } from "react";
import { Field, Layout } from "./field";
import type { FieldValues } from "react-hook-form";
import { stringify } from "@aiszlab/relax/class-name";
import Support from "./field/support";
import { Context } from "./context";

/**
 * @description
 * item render
 */
const Item = <T extends FieldValues = FieldValues>({
  required = false,
  className,
  style,
  support,
  ...props
}: FormItemProps<T>) => {
  const { classNames } = useContext(Context);

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
      supporting={!!support && <Support>{support}</Support>}
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
