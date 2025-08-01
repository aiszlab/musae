import React, { type CSSProperties, forwardRef, type MouseEventHandler, useRef } from "react";
import { MenuItemProps } from "../../types/menu";
import { useItemChildren, useMenuContext } from "./hooks";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useEvent, useHover } from "@aiszlab/relax";
import { Popper } from "../popper";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import { stringify } from "@aiszlab/relax/class-name";
import { $label } from "../theme/theme";

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
          borderBottomWidth: sizes.xxxxxxxxxsmall,
          borderBottomStyle: "solid",
          willChange: "border-color",
          transitionProperty: "border-color",
          transitionDuration: duration.short,
        },

        ":not(:hover)::after": {
          borderBottomColor: "transparent",
        },

        ":hover::after": {
          borderBottomColor: "var(--color-primary)",
        },
      },

      vertical: {
        backgroundColor: {
          default: null,
          ":hover": "var(--color-surface-container-highest)",
        },
      },

      inline: {
        backgroundColor: {
          default: null,
          ":hover": "var(--color-surface-container-highest)",
        },
      },
    }),
  },

  size: $create({
    small: (props: { level: number }) => ({
      paddingBlock: spacing.xxxxxsmall,
      paddingRight: spacing.xxsmall,
      paddingLeft: `calc(${spacing.xxsmall} + ${props.level} * ${spacing.large})`,
      borderRadius: sizes.xxxxxxxxsmall,
    }),

    medium: (props: { level: number }) => ({
      paddingBlock: spacing.xxsmall,
      paddingRight: spacing.medium,
      paddingLeft: `calc(${spacing.medium} + ${props.level} * ${spacing.xxxlarge})`,
      borderRadius: sizes.xxxxxxxsmall,
    }),

    large: (props: { level: number }) => ({
      paddingBlock: spacing.medium,
      paddingRight: spacing.large,
      paddingLeft: `calc(${spacing.large} + ${props.level} * ${spacing.xxxxxxlarge})`,
      borderRadius: sizes.xxxxsmall,
    }),
  }),

  selected: $create({
    inline: (props: {
      color?: CSSProperties["color"];
      backgroundColor?: CSSProperties["backgroundColor"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    vertical: (props: {
      color?: CSSProperties["color"];
      backgroundColor?: CSSProperties["backgroundColor"];
    }) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    horizontal: (props: { color?: CSSProperties["color"] }) => ({
      color: props.color,

      "::after": {
        borderBottomColor: props.color,
      },
    }),
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
    const theme = useTheme();
    const hasChildren = !!props.children;
    const itemRef = useRef<HTMLDivElement | null>(null);
    const isInline = mode === "inline";
    const isVertical = mode === "vertical";
    const isHorizontal = mode === "horizontal";

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
        styles.size[size]({ level }),
        // mode
        styles.mode.item[mode],

        isSelected &&
          styles.selected[mode]({
            ...((isInline || isVertical) && {
              backgroundColor: theme.colors["surface-container-highest"],
              color: theme.colors.primary,
            }),
            ...(isHorizontal && {
              color: theme.colors.primary,
            }),
          }),

        $label[size],
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
          "--color-primary": theme.colors.primary,
          "--color-surface-container-highest": theme.colors["surface-container-highest"],
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
            trigger={itemRef.current}
            open={isOpen}
            placement={mode === "vertical" ? "left-start" : "bottom-start"}
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
