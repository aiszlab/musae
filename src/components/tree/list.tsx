import React, { useContext } from "react";
import type { TreeChildRenderProps, TreeListProps } from "./types";
import Node from "./node";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, TreeClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import clsx from "clsx";
import Context from "./context";
import { useEvent, useThrottleCallback } from "@aiszlab/relax";

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

const List = ({ level, nodes, _key, title }: TreeListProps) => {
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const classNames = useClassNames(ComponentToken.Tree);
  const { expandedKeys, toggle } = useContext(Context);
  const isExpanded = expandedKeys.has(_key);

  const { next: _toggle } = useThrottleCallback(
    useEvent(async () => {
      toggle?.(_key);

      if (isExpanded) {
        scope.current.attributeStyleMap.set("overflow", "hidden");
        scope.current.attributeStyleMap.set("height", "auto");
        scope.current.attributeStyleMap.set("display", "block");
        await animate(scope.current, {
          height: 0,
        });
      } else {
        // style play like display: none
        scope.current.attributeStyleMap.set("height", 0);
        scope.current.attributeStyleMap.set("overflow", "hidden");
        scope.current.attributeStyleMap.set("display", "block");
        await animate(scope.current, {
          height: "auto",
        });
      }

      scope.current.attributeStyleMap.clear();
    }),
    {
      duration: 200,
    }
  );

  const styled = stylex.props(styles.list, !isExpanded && styles.hidden);

  return (
    <Node _key={_key} level={level} title={title} onToggle={_toggle}>
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
        {nodes.map((item) => {
          const _props: TreeChildRenderProps = {
            key: item.key,
            _key: item.key,
            level: level + 1,
            title: item.title,
          };

          if (item.children) {
            return <List {..._props} nodes={item.children} />;
          }

          return <Node {..._props} />;
        })}
      </ul>
    </Node>
  );
};

export default List;
