import React, { useMemo } from "react";
import type { ContextValue, TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useTogglable } from "@aiszlab/relax";
import { useExpandedKeys, useSelectedKeys } from "./hooks";

const Tree = ({
  expandedKeys: _expandedKeys,
  onExpand,
  onSelect,
  className,
  style,
  nodes,
  selectable = true,
  selectedKeys: _selectedKeys,
  defaultExpandedKeys = [],
  defaultSelectedKeys = [],
}: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useTogglable(nodes);
  const { expandedKeys, toggle: expand } = useExpandedKeys({
    expandedKeys: _expandedKeys,
    onExpand,
    defaultExpandedKeys,
  });
  const { selectedKeys, toggle: select } = useSelectedKeys({
    selectedKeys: _selectedKeys,
    defaultSelectedKeys,
    onSelect,
  });

  const contextValue = useMemo<ContextValue>(() => {
    return {
      checkedKeys,
      onCheck: check,
      expandedKeys,
      onExpand: expand,
      selectedKeys,
      onSelect: select,
      selectable,
    };
  }, [check, checkedKeys, expand, expandedKeys, select, selectedKeys, selectable]);

  return (
    <Context.Provider value={contextValue}>
      <List nodes={nodes} className={className} style={style} />
    </Context.Provider>
  );
};

export default Tree;
