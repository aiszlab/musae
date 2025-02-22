import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { TreeListProps } from "../../types/tree";
import React, { useContext, useRef } from "react";
import Node from "./node";
import { animate } from "motion/mini";
import Context from "./context";
import { useExpandable } from "../../hooks/use-expandable";
import { useUpdateEffect } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  list: {
    // reset ul styles
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
  },

  hidden: {
    display: "none",
  },
});

const List = ({ nodes = [], expanded = true, level = 0, className, style }: TreeListProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const { expandedKeys, onExpand, classNames } = useContext(Context);

  const { expand, collapse } = useExpandable();

  useUpdateEffect(async () => {
    if (expanded) {
      await expand(ref);
      return;
    }
    await collapse(ref);
  }, [expanded]);

  const styled = stylex.props(styles.list, !expanded && styles.hidden);

  return (
    <ul
      className={stringify(
        {
          [classNames.tree]: level === 0,
          [classNames.list]: level > 0,
          [classNames.listHidden]: !expanded,
        },
        className,
        styled.className,
      )}
      style={{
        ...styled.style,
        ...style,
      }}
      ref={ref}
    >
      {nodes.map(({ children = [], ...node }) => {
        return (
          <Node
            key={node.key}
            value={node.key}
            onExpand={onExpand}
            title={node.title}
            level={level}
          >
            {children.length > 0 && (
              <List nodes={children} expanded={expandedKeys.has(node.key)} level={level + 1} />
            )}
          </Node>
        );
      })}
    </ul>
  );
};

export default List;
