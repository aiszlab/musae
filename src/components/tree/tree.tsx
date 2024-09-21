import React, { useMemo } from "react";
import type { ContextValue, TreeProps } from "musae/types/tree";
import List from "./list";
import Context from "./context";
import { useTogglable } from "@aiszlab/relax";
import { useExpandedKeys, useSelectedKeys } from "./hooks";

const Tree = ({
  className,
  style,
  nodes,
  selectable = true,

  expandedKeys: _expandedKeys,
  selectedKeys: _selectedKeys,
  checkedKeys: _checkedKeys,
  defaultExpandedKeys = [],
  defaultSelectedKeys = [],
  defaultCheckedKeys = [],
  onExpand,
  onSelect,
  onCheck,
}: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useTogglable(nodes, {
    defaultToggledKeys: defaultCheckedKeys,
    toggledKeys: _checkedKeys,
    onToggle: onCheck,
  });
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
