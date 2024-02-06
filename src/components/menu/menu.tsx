import React, { forwardRef, useImperativeHandle } from "react";
import type { MenuProps, MenuRef } from "./types";
import Context from "./context";
import { useScrollable } from "@aiszlab/relax";
import { useContextValue } from "./hooks";
import Group from "./group";
import * as stylex from "@stylexjs/stylex";

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
const Menu = forwardRef<MenuRef, MenuProps>(({ onClick, className, style, ...props }, ref) => {
  const { targetRef, scrollTo, to, setTrigger } = useScrollable<HTMLUListElement, HTMLLIElement>({
    direction: "vertical",
  });

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
      <Group ref={targetRef} items={props.items} className={styled.className} style={styled.style} />
    </Context.Provider>
  );
});

export default Menu;
