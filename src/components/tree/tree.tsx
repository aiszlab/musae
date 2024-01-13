import React from "react";
import { TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";
import { useExpandedKeys } from "./hooks";

const Tree = ({ expandedKeys: _expandedKeys, onExpand, ...props }: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useToggleable(props.nodes);
  const { expand, expandedKeys } = useExpandedKeys([_expandedKeys, onExpand]);

  return (
    <Context.Provider
      value={{
        checkedKeys,
        check,
        expandedKeys,
        expand,
      }}
    >
      <List {...props} level={0} />
    </Context.Provider>
  );
};

export default Tree;
