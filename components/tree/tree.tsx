import React from "react";
import { TreeProps } from "./types";
import { Menu, ConfigContext } from "../menu";
import { useMenuConfigContextValue } from "./hooks";

const Tree = (props: TreeProps) => {
  const menuConfigContextValue = useMenuConfigContextValue();

  return (
    <ConfigContext.Provider value={menuConfigContextValue}>
      <Menu items={props.nodes || []} />
    </ConfigContext.Provider>
  );
};

export default Tree;
