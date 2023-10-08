import { FormItemProps } from "./types";
import React from "react";
import Field, { _Grid } from "./field";

/**
 * @description
 * item render
 */
const Item = (props: FormItemProps) => {
  if (!props.name) {
    return (
      <_Grid label={props.label} labelCol={props.labelCol} wrapperCol={props.wrapperCol}>
        {props.children}
      </_Grid>
    );
  }

  return <Field {...props} name={props.name} />;
};

export default Item;
