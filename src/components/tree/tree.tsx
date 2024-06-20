import React, { useMemo } from "react";
import type { ContextValue, TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";
import { useExpandedKeys, useSelectedKeys } from "./hooks";

const Tree = ({
  expandedKeys: _expandedKeys,
  onExpand,
  className,
  style,
  nodes,
  selectable = true,
  selectedKeys: _selectedKeys,
}: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useToggleable(nodes);
  const { expandedKeys, toggle: expand } = useExpandedKeys([_expandedKeys, onExpand]);
  const { selectedKeys, toggle: select } = useSelectedKeys({ selectedKeys: _selectedKeys });

  const contextValue = useMemo<ContextValue>(() => {
    return {
      checkedKeys,
      onCheck: check,
      expandedKeys,
      onExpand: expand,
      selectedKeys,
      onSelect: select,
    };
  }, [check, checkedKeys, expand, expandedKeys, select, selectedKeys]);

  return (
    <Context.Provider value={contextValue}>
      <List nodes={nodes} className={className} style={style} />
    </Context.Provider>
  );
};

export default Tree;
