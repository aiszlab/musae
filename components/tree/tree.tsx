import React from "react";
import { TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";
import { useExpandedKeys } from "./hooks";

const Tree = (props: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useToggleable(props.nodes);
  const { expand, expandedKeys } = useExpandedKeys([void 0]);

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
