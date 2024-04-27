import React, { useMemo } from "react";
import type { ContextValue, TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";
import { useExpandedKeys } from "./hooks";

const Tree = ({ expandedKeys: _expandedKeys, onExpand, className, style, ...props }: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useToggleable(props.nodes);
  const { toggle, expandedKeys } = useExpandedKeys([_expandedKeys, onExpand]);

  const contextValue = useMemo<ContextValue>(() => {
    return {
      checkedKeys,
      check,
      expandedKeys,
      toggle,
    };
  }, [check, checkedKeys, toggle, expandedKeys]);

  return (
    <Context.Provider value={contextValue}>
      <List nodes={props.nodes} className={className} style={style} />
    </Context.Provider>
  );
};

export default Tree;
