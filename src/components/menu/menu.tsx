import React, { forwardRef, useImperativeHandle } from "react";
import type { MenuProps, MenuRef } from "./types";
import Context from "./context";
import { useScrollable, clsx } from "@aiszlab/relax";
import { useContextValue, useScrollOrientation } from "./hooks";
import Group from "./group";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { MenuClassToken } from "../../utils/class-name";
import { ComponentToken } from "../../utils/component-token";

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
  (
    {
      onClick,
      className,
      style,
      size = "medium",
      mode = "inline",
      items = [],
      selectedKeys,
      expandedKeys,
      defaultExpandedKeys,
      defaultSelectedKeys,
    },
    ref,
  ) => {
    const classNames = useClassNames(ComponentToken.Menu);
    const { targetRef, scrollTo, to, setTrigger } = useScrollable<HTMLUListElement, HTMLLIElement>({
      orientation: useScrollOrientation(mode),
    });

    // context value
    const contextValue = useContextValue({
      selectedKeys,
      expandedKeys,
      defaultSelectedKeys,
      defaultExpandedKeys,
      onClick,
      setTrigger,
      size,
    });

    useImperativeHandle(ref, () => ({
      scrollTo: (key, duration) => {
        scrollTo(to(key), duration);
      },
    }));

    const styled = stylex.props(styles.menu);

    return (
      <Context.Provider value={contextValue}>
        <Group
          ref={targetRef}
          items={items}
          mode={mode}
          className={clsx(
            classNames[MenuClassToken.Menu],
            {
              [classNames[MenuClassToken.MenuHorizontal]]: mode === "horizontal",
            },
            className,
            styled.className,
          )}
          style={{
            ...styled.style,
            ...style,
          }}
        />
      </Context.Provider>
    );
  },
);

export default Menu;
