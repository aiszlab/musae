import React, { forwardRef } from "react";
import type { MenuGroupProps } from "./types";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useUpdateEffect } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  menu: {
    /// add position reason: when read li offsetTop, if parent is not relative, then it will read wrong value
    /// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    position: "relative",
  },

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

  collapser: (props: { isExpanded: boolean }) => ({
    ":last-child": {
      marginLeft: "auto",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: props.isExpanded ? "rotateX(0)" : "rotateX(180deg)",
    transition: "transform 200ms",
  }),
});

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = forwardRef<HTMLUListElement, MenuGroupProps>(({ items = [], level = 0, expanded = true }, ref) => {
  const classNames = useClassNames(ComponentToken.Menu);
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const { toggle, collect } = useMenuContext();

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

  const styled = stylex.props(styles.group, level === 0 && styles.menu, !expanded && styles.hidden);

  return (
    <ul
      className={clsx(
        {
          [classNames[MenuClassToken.Menu]]: level === 0,
          [classNames[MenuClassToken.Group]]: level > 0,
          [classNames[MenuClassToken.GroupHidden]]: !expanded,
        },
        styled.className
      )}
      style={styled.style}
      ref={scope}
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
            onClick={toggle}
            ref={(_ref) => {
              collect(item.key, _ref!);
            }}
          >
            {children.length > 0 && <Group items={children} />}
          </Item>
        );
      })}
    </ul>
  );
});

export default Group;
