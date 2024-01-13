import React, { forwardRef, useImperativeHandle, useRef } from "react";
import type { MenuProps, MenuRef } from "./types";
import Group from "./group";
import Context from "./context";
import { useRefs, useScrollable } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import Item from "./item";
import { useContextValue } from "./hooks";
import clsx from "clsx";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = forwardRef<MenuRef, MenuProps>(({ onClick, className, style, ...props }, ref) => {
  const classNames = useClassNames(ComponentToken.Menu);

  const _menuRef = useRef<HTMLUListElement>(null);
  const { targetRef, scrollTo, to, setTrigger } = useScrollable({ direction: "vertical" });
  const menuRef = useRefs(targetRef, _menuRef);

  /// context value
  const contextValue = useContextValue({
    selectedKeys: props.selectedKeys,
    expandedKeys: props.expandedKeys,
    defaultSelectedKeys: props.defaultSelectedKeys,
    defaultExpandedKeys: props.defaultExpandedKeys,
    onClick,
    setTrigger,
  });

  useImperativeHandle(ref, () => ({
    scrollTo: (key, duration) => {
      scrollTo(to(key), duration);
    },
  }));

  return (
    <Context.Provider value={contextValue}>
      <ul
        ref={menuRef}
        className={clsx(classNames[MenuClassToken.Menu], className)}
        style={{
          /// add position reason: when read li offsetTop, if parent is not relative, then it will read wrong value
          /// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
          position: "relative",
        }}
      >
        {props.items.map((item) => {
          if (item.children) {
            return (
              <Group
                key={item.key}
                _key={item.key}
                level={0}
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
              level={0}
              label={item.label}
              prefix={item.prefix}
              onClick={contextValue.click}
              ref={(_ref) => {
                contextValue.collect(item.key, _ref!);
              }}
            />
          );
        })}
      </ul>
    </Context.Provider>
  );
});

export default Menu;
