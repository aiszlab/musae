import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { TreeListProps } from "./types";
import React, { useContext } from "react";
import Node from "./node";
import clsx from "clsx";
import { useAnimate } from "framer-motion";
import Context from "./context";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import { useExpandEffect } from "../../hooks/use-expand-effect";

const styles = stylex.create({
  list: {
    /// reset ul styles
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
  },

  hidden: {
    display: "none",
  },
});

const List = ({ nodes = [], expanded = true, level = 0 }: TreeListProps) => {
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { expandedKeys, toggle } = useContext(Context);
  const classNames = useClassNames(ComponentToken.Tree);

  useExpandEffect({
    animate,
    target: scope,
    expanded,
  });

  const styled = stylex.props(styles.list, !expanded && styles.hidden);

  return (
    <ul
      className={clsx(
        {
          [classNames[TreeClassToken.Tree]]: level === 0,
          [classNames[TreeClassToken.List]]: level > 0,
          [classNames[TreeClassToken.ListHidden]]: !expanded,
        },
        styled.className
      )}
      style={styled.style}
      ref={scope}
    >
      {nodes.map(({ children = [], ...node }) => {
        return (
          <Node key={node.key} value={node.key} onToggle={toggle} title={node.title} level={level}>
            {children.length > 0 && <List nodes={children} expanded={expandedKeys.has(node.key)} level={level + 1} />}
          </Node>
        );
      })}
    </ul>
  );
};

export default List;
