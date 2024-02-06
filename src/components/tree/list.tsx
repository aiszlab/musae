import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { TreeListProps } from "./types";
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

const List = ({ nodes = [], expanded = true, level = 0 }: TreeListProps) => {
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { expandedKeys, toggle } = useContext(Context);
  const classNames = useClassNames(ComponentToken.Tree);

  useUpdateEffect(async () => {
    if (expanded) {
      scope.current.attributeStyleMap.set("height", 0);
      scope.current.attributeStyleMap.set("overflow", "hidden");
      scope.current.attributeStyleMap.set("display", "block");
      await animate(scope.current, {
        height: "auto",
      });
      scope.current.attributeStyleMap.clear();
      return;
    }

    // style play like display: none
    scope.current.attributeStyleMap.set("overflow", "hidden");
    scope.current.attributeStyleMap.set("height", "auto");
    scope.current.attributeStyleMap.set("display", "block");
    await animate(scope.current, {
      height: 0,
    });
    scope.current.attributeStyleMap.clear();
  }, [expanded]);

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
