import { FormItemProps } from "./types";
import React from "react";
import Field, { Gridded } from "./field";

/**
 * @description
 * item render
 */
const Item = (props: FormItemProps) => {
  if (!props.name) {
    return (
      <Gridded label={props.label} labelCol={props.labelCol} wrapperCol={props.wrapperCol}>
        {props.children}
      </Gridded>
    );
  }

  return <Field {...props} name={props.name} />;
};

export default Item;
