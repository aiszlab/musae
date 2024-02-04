import React, { useMemo } from "react";
import type { ContextValue, TreeChildRenderProps, TreeProps } from "./types";
import List from "./list";
import Context from "./context";
import { useToggleable } from "@aiszlab/relax";
import { useExpandedKeys } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Node from "./node";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  tree: {
    /// reset ul styles
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
  },
});

const Tree = ({ expandedKeys: _expandedKeys, onExpand, className, style, ...props }: TreeProps) => {
  const { toggledKeys: checkedKeys, toggle: check } = useToggleable(props.nodes);
  const { toggle, expandedKeys } = useExpandedKeys([_expandedKeys, onExpand]);
  const classNames = useClassNames(ComponentToken.Tree);

  const contextValue = useMemo<ContextValue>(() => {
    return {
      checkedKeys,
      check,
      expandedKeys,
      toggle,
    };
  }, [check, checkedKeys, toggle, expandedKeys]);

  const styled = stylex.props(styles.tree);

  return (
    <Context.Provider value={contextValue}>
      <ul
        className={clsx(classNames[TreeClassToken.Tree], className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
      >
        {props.nodes.map((item) => {
          const _props: TreeChildRenderProps = {
            key: item.key,
            _key: item.key,
            level: 0,
            title: item.title,
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
