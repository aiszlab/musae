import React from "react";
import type { MenuChildRenderProps, MenuGroupProps } from "./types";
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
  const { expandedKeys, toggle, collect, click } = useMenuContext();
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
          const _props: MenuChildRenderProps = {
            key: item.key,
            _key: item.key,
            level,
            label: item.label,
            prefix: item.prefix,
            className: item.className,
            style: item.style,
          };

          /// if item with children, use group for child render
          if (item.children) {
            return <Group {..._props} items={item.children} />;
          }

          /// only render menu item
          return (
            <Item
              {..._props}
              onClick={click}
              ref={(_ref) => {
                collect(item.key, _ref!);
              }}
            />
          );
        })}
      </ul>
    </Item>
  );
};

export default Group;
