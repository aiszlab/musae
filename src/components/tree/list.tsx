import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { TreeNode } from "./types";
import React, { useContext } from "react";
import Node from "./node";
import clsx from "clsx";
import { useUpdateEffect } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import Context from "./context";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";

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

interface Props {
  nodes?: TreeNode[];
  isExpanded?: boolean;
  level?: number;
}

const List = ({ nodes, isExpanded = true, level = 0 }: Props) => {
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { expandedKeys, toggle } = useContext(Context);
  const classNames = useClassNames(ComponentToken.Tree);

  useUpdateEffect(async () => {
    if (isExpanded) {
      await animate(scope.current, {
        height: "auto",
      });
      return;
    }

    await animate(scope.current, {
      height: 0,
    });
  }, [isExpanded]);

  if (!nodes) return null;

  const styled = stylex.props(styles.list, !isExpanded && styles.hidden);

  return (
    <ul
      className={clsx(
        classNames[TreeClassToken.List],
        {
          [classNames[TreeClassToken.ListHidden]]: !isExpanded,
        },
        styled.className
      )}
      style={styled.style}
      ref={scope}
    >
      {nodes.map((node) => {
        return (
          <Node value={node.key} onToggle={toggle} title={node.title} level={level}>
            <List nodes={node.children} isExpanded={expandedKeys.has(node.key)} level={level + 1} />
          </Node>
        );
      })}
    </ul>
  );
};

export default List;
