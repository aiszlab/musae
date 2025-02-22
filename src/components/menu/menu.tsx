import React, { forwardRef, useImperativeHandle } from "react";
import type { MenuProps, MenuRef } from "../../types/menu";
import { Context, CLASS_NAMES } from "./context";
import { useScrollable } from "@aiszlab/relax";
import { useContextValue, useScrollOrientation } from "./hooks";
import Group from "./group";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  menu: {
    // add position reason: when read li offsetTop, if parent is not relative, then it will read wrong value
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
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
      onExpandedKeysChange,
    },
    ref,
  ) => {
    const classNames = useClassNames(CLASS_NAMES);
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
      classNames,
      onExpandedKeysChange,
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
          className={stringify(
            classNames.menu,
            mode === "horizontal" && classNames.horizontal,
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
