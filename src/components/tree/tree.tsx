import React, { useMemo } from "react";
import type { TreeProps } from "musae/types/tree";
import List from "./list";
import Context, { CLASS_NAMES } from "./context";
import { useTogglable } from "@aiszlab/relax";
import { useExpandedKeys, useSelectedKeys } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names.component";

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

  const classNames = useClassNames(CLASS_NAMES);

  const contextValue = useMemo(() => {
    return {
      checkedKeys,
      onCheck: check,
      expandedKeys,
      onExpand: expand,
      selectedKeys,
      onSelect: select,
      selectable,
      classNames,
    };
  }, [check, checkedKeys, expand, expandedKeys, select, selectedKeys, selectable, classNames]);

  return (
    <Context.Provider value={contextValue}>
      <List nodes={nodes} className={className} style={style} />
    </Context.Provider>
  );
};

export default Tree;
