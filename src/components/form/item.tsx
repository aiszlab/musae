import { FormItemProps } from "./types";
import React from "react";
import Field from "./field";
import Gridded from "./gridded";

/**
 * @description
 * item render
 */
const Item = ({ required = false, ...props }: FormItemProps) => {
  if (props.name) {
    return <Field {...props} name={props.name} required={required} />;
  }

  return (
    <Gridded label={props.label} labelCol={props.labelCol} wrapperCol={props.wrapperCol} required={required}>
      {props.children}
    </Gridded>
  );
};

export default Item;
