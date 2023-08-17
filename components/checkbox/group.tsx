import Context from "./context";
import { GroupRenderProps } from "./types";
import React from "react";

const Group = (props: GroupRenderProps) => {
  return <Context.Provider value={null}>{props.children}</Context.Provider>;
};

export default Group;
