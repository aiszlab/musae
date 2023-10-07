import { FormItemProps } from "./types";
import React from "react";
import Field from "./field";

const Item = (props: FormItemProps) => {
  if (!props.name) return props.children;

  return <Field {...props} name={props.name} />;
};

export default Item;
