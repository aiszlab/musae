import React from "react";
import type { MenuGroupProps } from "./types";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useMenuContext } from "./hooks";
import { useEvent, useThrottleCallback } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { KeyboardArrowUp } from "../icon";

const styles = stylex.create({
  group: {
    margin: spacing.none,
    padding: spacing.none,
    listStyle: "none",
  },

  item: {
    marginBlock: spacing.xsmall,
  },

  hidden: {
    display: "none",
  },

  collapser: (isExpanded: boolean) => ({
    ":last-child": {
      marginLeft: "auto",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: isExpanded ? "rotateX(0)" : "rotateX(180deg)",
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
  const { expandedKeys, click, toggle, collect } = useMenuContext();
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
        <span {...stylex.props(styles.collapser(isExpanded))}>
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
        className={clsx(styled.className, classNames[MenuClassToken.Group], className, {
          [classNames[MenuClassToken.GroupHidden]]: !isExpanded,
        })}
        style={{
          ...styled.style,
          ...itemProps.style,
        }}
        ref={scope}
      >
        {items.map((item) => {
          if (item.children) {
            return (
              <Group
                key={item.key}
                _key={item.key}
                level={level + 1}
                label={item.label}
                prefix={item.prefix}
                items={item.children}
              />
            );
          }

          return (
            <Item
              key={item.key}
              _key={item.key}
              level={level + 1}
              label={item.label}
              prefix={item.prefix}
              onClick={click}
              ref={(_ref) => {
                collect(item.key, _ref!);
              }}
              {...stylex.props(styles.item)}
            />
          );
        })}
      </ul>
    </Item>
  );
};

export default Group;
