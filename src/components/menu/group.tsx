import React from "react";
import type { MenuGroupProps } from "./types";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useEvent, useThrottleCallback } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { KeyboardArrowUp } from "../icon";
import Child from "./child";

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
const Group = ({ items, level = 0, className, _key, ...itemProps }: MenuGroupProps) => {
  const { expandedKeys, toggle, collect } = useMenuContext();
  const classNames = useClassNames(ComponentToken.Menu);
  const [scope, animate] = useAnimate<HTMLUListElement>();
  const isExpanded = expandedKeys.has(_key);

  const { next: _toggle } = useThrottleCallback(
    useEvent(async () => {
      toggle(_key);

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

  const styled = stylex.props(styles.group, !isExpanded && styles.hidden);

  return (
    <Item
      _key={_key}
      level={level}
      key={_key}
      suffix={
        <span
          {...stylex.props(
            styles.collapser({
              isExpanded,
            })
          )}
        >
          <KeyboardArrowUp size={16} />
        </span>
      }
      {...itemProps}
      onClick={_toggle}
      ref={(_ref) => {
        collect(_key, _ref!);
      }}
    >
      <ul
        className={clsx(
          classNames[MenuClassToken.Group],
          {
            [classNames[MenuClassToken.GroupHidden]]: !isExpanded,
          },
          className,
          styled.className
        )}
        style={{
          ...styled.style,
          ...itemProps.style,
        }}
        ref={scope}
      >
        {items.map((item) => {
          return <Child item={item} level={level + 1} key={item.key} />;
        })}
      </ul>
    </Item>
  );
};

export default Group;
