import Context from "./context";
import { type CheckboxGroupProps } from "./types";
import React from "react";

const Group = (props: CheckboxGroupProps) => {
  return <Context.Provider value={null}>{props.children}</Context.Provider>;
};

export default Group;
