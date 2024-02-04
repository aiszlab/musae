import React, { Key, useMemo } from "react";
import { ContextValue, TreeNodeProps, TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";
import { useExpandedKeys } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Node from "./node";

const Tree = ({ expandedKeys: _expandedKeys, onExpand, className, style, ...props }: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useToggleable(props.nodes);
  const { expand, expandedKeys } = useExpandedKeys([_expandedKeys, onExpand]);
  const classNames = useClassNames(ComponentToken.Tree);

  const contextValue = useMemo<ContextValue>(() => {
    return {
      checkedKeys,
      check,
      expandedKeys,
      expand,
    };
  }, [check, checkedKeys, expand, expandedKeys]);

  return (
    <Context.Provider value={contextValue}>
      <ul className={clsx(classNames[TreeClassToken.Tree], className)} style={style}>
        {props.nodes.map((item) => {
          const _props: Pick<TreeNodeProps, Extract<keyof TreeNodeProps, keyof TreeProps>> & {
            key: Key;
          } = {
            key: item.key,
          };

          if (item.children) {
            return <List {..._props} nodes={item.children} />;
          }

          return <Node {..._props} />;
        })}
      </ul>
    </Context.Provider>
  );
};

export default Tree;
