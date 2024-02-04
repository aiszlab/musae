import React, { forwardRef, useImperativeHandle, useRef } from "react";
import type { MenuProps, MenuRef } from "./types";
import Context from "./context";
import { useRefs, useScrollable } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import { useContextValue } from "./hooks";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Child from "./child";

const styles = stylex.create({
  menu: {
    /// add position reason: when read li offsetTop, if parent is not relative, then it will read wrong value
    /// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    position: "relative",

    /// reset ul styles
    margin: spacing.none,
    padding: spacing.none,
    listStyle: "none",
  },
});

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

  const styled = stylex.props(styles.menu);

  return (
    <Context.Provider value={contextValue}>
      <ul
        ref={menuRef}
        className={clsx(classNames[MenuClassToken.Menu], className, styled.className)}
        style={styled.style}
      >
        {props.items.map((item) => {
          return <Child key={item.key} item={item} level={0} />;
        })}
      </ul>
    </Context.Provider>
  );
});

export default Menu;
