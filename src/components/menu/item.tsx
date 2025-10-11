import React, { forwardRef, type MouseEventHandler, useRef } from "react";
import { MenuItemProps } from "../../types/menu";
import { useItemChildren, useMenuContext } from "./hooks";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useEvent, useHover } from "@aiszlab/relax";
import { Popper } from "../popper";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const styles = {
  default: $create({
    item: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
      whiteSpace: "nowrap",

      willChange: "background-color, border, color",
      transitionProperty: "background-color, border, color",
      transitionDuration: duration.short,

      // reset styles
      boxSizing: "border-box",
    },
  }),

  mode: {
    menuitem: $create({
      horizontal: {},

      vertical: {
        marginBlockStart: {
          default: spacing.xxxxxsmall,
          ":first-of-type": spacing.none,
        },
      },

      inline: {
        marginBlockStart: {
          default: spacing.xxxxxsmall,
          ":first-of-type": spacing.none,
        },
      },
    }),

    item: $create({
      horizontal: {
        height: sizes.full,
        position: "relative",

        "::after": {
          content: "",
          position: "absolute",
          insetInline: 0,
          insetBlockEnd: 0,
          borderBottomWidth: sizes.xxxxxxxxxxsmall,
          borderBottomStyle: "solid",
          willChange: "border-color",
          transitionProperty: "border-color",
          transitionDuration: duration.short,
        },

        ":not(:hover)::after": {
          borderBottomColor: "transparent",
        },

        ":hover::after": {
          borderBottomColor: "var(--color-primary)" satisfies ThemeColorVariable,
        },
      },

      vertical: {
        backgroundColor: {
          default: null,
          ":hover": "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
        },
      },

      inline: {
        backgroundColor: {
          default: null,
          ":hover": "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
        },
      },
    }),
  },

  size: $create({
    small: {
      paddingBlock: spacing.xxxxxsmall,
      paddingRight: spacing.xxsmall,
      paddingLeft: `calc(${spacing.xxsmall} + var(--level) * ${spacing.large})`,
      borderRadius: sizes.xxxxxxxxxsmall,
    },

    medium: {
      paddingBlock: spacing.xxsmall,
      paddingRight: spacing.medium,
      paddingLeft: `calc(${spacing.medium} + var(--level) * ${spacing.xxxlarge})`,
      borderRadius: sizes.xxxxxxxsmall,
    },

    large: {
      paddingBlock: spacing.medium,
      paddingRight: spacing.large,
      paddingLeft: `calc(${spacing.large} + var(--level) * ${spacing.xxxxxxlarge})`,
      borderRadius: sizes.xxxxsmall,
    },
  }),

  selected: $create({
    inline: {
      backgroundColor: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },

    vertical: {
      backgroundColor: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },

    horizontal: {
      color: "var(--color-primary)" satisfies ThemeColorVariable,

      "::after": {
        borderBottomColor: "var(--color-primary)" satisfies ThemeColorVariable,
      },
    },
  }),

  popper: $create({
    default: {
      padding: spacing.xxxxxsmall,
    },
  }),
};

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
      menuitem: $props(styles.mode.menuitem[mode]),
      item: $props(
        styles.default.item,
        // size
        styles.size[size],
        // mode
        styles.mode.item[mode],
        isSelected && styles.selected[mode],
        $body[size],
      ),
      popper: $props(styles.popper.default),
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
