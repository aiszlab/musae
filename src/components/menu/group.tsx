import React, { forwardRef } from "react";
import type { MenuGroupProps } from "./types";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useRefs } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useExpandEffect } from "../../hooks/use-expand-effect";

const styles = stylex.create({
  group: {
    /// reset ul styles
    margin: spacing.none,
    padding: spacing.none,
    listStyle: "none",

    overflow: "auto",
  },

  hidden: {
    display: "none",
  },
});

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<HTMLUListElement, MenuGroupProps>(
  ({ items = [], level = 0, expanded = true, className, style }, ref) => {
    const classNames = useClassNames(ComponentToken.Menu);
    const [scope, animate] = useAnimate<HTMLUListElement>();
    const { collect, expandedKeys } = useMenuContext();
    const groupRef = useRefs<HTMLUListElement>(ref, scope);

    useExpandEffect({
      animate,
      target: scope,
      expanded,
    });

    const styled = stylex.props(styles.group, !expanded && styles.hidden);

    return (
      <ul
        className={clsx(
          classNames[MenuClassToken.Group],
          {
            [classNames[MenuClassToken.GroupHidden]]: !expanded,
          },
          className,
          styled.className
        )}
        style={{
          ...styled.style,
          ...style,
        }}
        ref={groupRef}
      >
        {items.map(({ children = [], ...item }) => {
          return (
            <Item
              key={item.key}
              value={item.key}
              level={level}
              className={item.className}
              style={item.style}
              label={item.label}
              ref={(_ref) => {
                collect(item.key, _ref!);
              }}
            >
              {children.length > 0 && (
                <Group items={children} expanded={expandedKeys.has(item.key)} level={level + 1} />
              )}
            </Item>
          );
        })}
      </ul>
    );
  }
);

export default Group;
