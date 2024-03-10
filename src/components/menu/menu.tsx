import React, { forwardRef, useImperativeHandle } from "react";
import type { MenuProps, MenuRef } from "./types";
import Context from "./context";
import { useScrollable } from "@aiszlab/relax";
import { useContextValue, useScrollDirection } from "./hooks";
import Group from "./group";
import * as stylex from "@stylexjs/stylex";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  menu: {
    /// add position reason: when read li offsetTop, if parent is not relative, then it will read wrong value
    /// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    position: "relative",
  },
});

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = forwardRef<MenuRef, MenuProps>(
  ({ onClick, className, style, variant = "filled", size = "medium", mode = "inline", ...props }, ref) => {
    const classNames = useClassNames(ComponentToken.Menu);
    const { targetRef, scrollTo, to, setTrigger } = useScrollable<HTMLUListElement, HTMLLIElement>({
      direction: useScrollDirection(mode),
    });

    /// context value
    const contextValue = useContextValue({
      selectedKeys: props.selectedKeys,
      expandedKeys: props.expandedKeys,
      defaultSelectedKeys: props.defaultSelectedKeys,
      defaultExpandedKeys: props.defaultExpandedKeys,
      onClick,
      setTrigger,
      variant,
      size,
    });

    useImperativeHandle(ref, () => ({
      scrollTo: (key, duration) => {
        scrollTo(to(key), duration);
      },
    }));

    return (
      <Context.Provider value={contextValue}>
        <Group
          ref={targetRef}
          items={props.items}
          className={clsx(classNames[MenuClassToken.Menu], className)}
          style={style}
          styles={[styles.menu]}
          mode={mode}
        />
      </Context.Provider>
    );
  }
);

export default Menu;
