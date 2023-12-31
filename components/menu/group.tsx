import React from "react";
import type { MenuGroupProps } from "./types";
import { useAnimate } from "framer-motion";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";
import Item from "./item";
import { useGroupChildren, useMenuContext } from "./hooks";
import { StyledMenuGroup } from "./styled";
import { useEvent, useThrottleCallback } from "@aiszlab/relax";

/**
 * @author murukal
 *
 * @description
 * menu group
 */
const Group = ({ items, level = 0, className, _key, ...itemProps }: MenuGroupProps) => {
  const { expandedKeys, click, toggle } = useMenuContext();
  const classNames = useClassNames(ComponentToken.Menu);
  const [scope, animate] = useAnimate<HTMLUListElement>();

  const isExpanded = expandedKeys.has(_key);
  const { collapser } = useGroupChildren({ isExpanded });

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

  return (
    <Item _key={_key} level={level} key={_key} suffix={collapser} {...itemProps} onClick={_toggle}>
      <StyledMenuGroup
        className={clsx(classNames[MenuClassToken.Group], className, {
          [classNames[MenuClassToken.GroupHidden]]: !isExpanded,
        })}
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
            />
          );
        })}
      </StyledMenuGroup>
    </Item>
  );
};

export default Group;
