import styles from "./styles";
import React, { forwardRef, type MouseEventHandler, useRef } from "react";
import { MenuItemProps } from "../../types/menu";
import { useItemChildren, useMenuContext } from "./hooks";
import { props as $props } from "@stylexjs/stylex";
import { useEvent, useHover } from "@aiszlab/relax";
import { Popper } from "../popper";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ level, label, prefix, suffix, value, className, mode, onClick, ...props }, ref) => {
    const {
      selectedKeys,
      expandedKeys,
      click: _click,
      toggle,
      size,
      classNames,
    } = useMenuContext();
    const isSelected = selectedKeys.has(value);
    const isExpanded = expandedKeys.has(value);
    const hasChildren = !!props.children;
    const itemRef = useRef<HTMLDivElement | null>(null);
    const isInline = mode === "inline";
    const isVertical = mode === "vertical";
    const themeColorVars = useThemeColorVars(["primary", "surface-container-highest"]);

    // delay disappear after hover leave
    const [isOpen, { turnOn, disappear }] = useLazyBoolean();
    const [, hoverProps] = useHover({
      onEnter: turnOn,
      onLeave: disappear,
    });

    const click = useEvent<MouseEventHandler<HTMLDivElement>>((event) => {
      onClick?.(event);

      // if item is a group, just trigger key
      if (hasChildren) {
        toggle(value);
        return;
      }

      _click(value);
    });

    const _children = useItemChildren({
      label,
      prefix,
      suffix,
      hasChildren,
      isExpanded,
      isInline,
    });

    const styled = {
      menuitem: $props(styles.item.mode.menuitem[mode]),
      item: $props(
        styles.item.base.item,
        // size
        styles.item.size[size],
        // mode
        styles.item.mode.item[mode],
        isSelected && styles.item.selected[mode],
        $body[size],
      ),
      popper: $props(styles.item.popper.base),
    };

    return (
      <li
        role="menuitem"
        ref={ref}
        className={styled.menuitem.className}
        style={{
          ...styled.menuitem.style,
          ...themeColorVars,
          "--level": level,
        }}
      >
        <div
          ref={itemRef}
          className={stringify(classNames.item, className, styled.item.className)}
          style={styled.item.style}
          onClick={click}
          {...hoverProps}
        >
          {_children.prefix}
          {_children.label}
          {_children.suffix}
        </div>

        {/* inline mode, show children directly */}
        {isInline && props.children}

        {/* not inline mode, show children in popper */}
        {!isInline && !!props.children && (
          <Popper
            trigger={() => itemRef.current}
            open={isOpen}
            placement={isVertical ? "left-start" : "bottom-start"}
            className={styled.popper.className}
            style={styled.popper.style}
            {...hoverProps}
          >
            {props.children}
          </Popper>
        )}
      </li>
    );
  },
);

export default Item;
