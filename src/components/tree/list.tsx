import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { TreeListProps } from "musae/types/tree";
import React, { useContext } from "react";
import Node from "./node";
import { useAnimate } from "framer-motion";
import Context from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TreeClassToken } from "../../utils/class-name";
import { useExpandable } from "../../hooks/use-expandable";
import { useUpdateEffect } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";

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

const List = ({ nodes = [], expanded = true, level = 0, className, style }: TreeListProps) => {
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { expandedKeys, onExpand } = useContext(Context);
  const classNames = useClassNames("tree");

  const { expand, collapse } = useExpandable();

  useUpdateEffect(async () => {
    if (expanded) {
      await expand([scope, animate]);
      return;
    }
    await collapse([scope, animate]);
  }, [expanded]);

  const styled = stylex.props(styles.list, !expanded && styles.hidden);

  return (
    <ul
      className={stringify(
        {
          [classNames[TreeClassToken.Tree]]: level === 0,
          [classNames[TreeClassToken.List]]: level > 0,
          [classNames[TreeClassToken.ListHidden]]: !expanded,
        },
        className,
        styled.className,
      )}
      style={{
        ...styled.style,
        ...style,
      }}
      ref={scope}
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
