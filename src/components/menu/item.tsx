import React, { type CSSProperties, forwardRef, type MouseEventHandler, useRef } from "react";
import { MenuItemProps } from "../../types/menu";
import { useItemChildren, useMenuContext } from "./hooks";
import stylex from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { useEvent, useHover } from "@aiszlab/relax";
import { Popper } from "../popper";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  default: stylex.create({
    item: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",

      willChange: "background-color, border, color",
      transitionProperty: "background-color, border, color",
      transitionDuration: duration.short,

      // reset styles
      boxSizing: "border-box",
    },
  }),

  mode: {
    menuitem: stylex.create({
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

    item: stylex.create({
      horizontal: (props: { outlineColor?: CSSProperties["borderColor"] }) => ({
        height: sizes.full,
        position: "relative",

        "::after": {
          content: "",
          position: "absolute",
          insetInline: 0,
          insetBlockEnd: 0,
          borderBottomWidth: sizes.xxxxxxxxsmall,
          borderBottomStyle: "solid",
          willChange: "border-color",
          transitionProperty: "border-color",
          transitionDuration: duration.short,
        },

        ":not(:hover)::after": {
          borderBottomColor: "transparent",
        },

        ":hover::after": {
          borderBottomColor: props.outlineColor,
        },
      }),

      vertical: (props: { backgroundColor?: CSSProperties["backgroundColor"] }) => ({
        backgroundColor: {
          default: null,
          ":hover": props.backgroundColor,
        },
      }),

      inline: (props: { backgroundColor?: CSSProperties["backgroundColor"] }) => ({
        backgroundColor: {
          default: null,
          ":hover": props.backgroundColor,
        },
      }),
    }),
  },

  size: stylex.create({
    small: (props: { level: number }) => ({
      paddingBlock: spacing.xxxxxsmall,
      paddingRight: spacing.xxsmall,
      paddingLeft: `calc(${spacing.xxsmall} + ${props.level} * ${spacing.large})`,
      borderRadius: sizes.xxxxxxxsmall,
    }),

    medium: (props: { level: number }) => ({
      paddingBlock: spacing.xxsmall,
      paddingRight: spacing.medium,
      paddingLeft: `calc(${spacing.medium} + ${props.level} * ${spacing.xxlarge})`,
      borderRadius: sizes.xxxxxxsmall,
    }),

    large: (props: { level: number }) => ({
      paddingBlock: spacing.medium,
      paddingRight: spacing.large,
      paddingLeft: `calc(${spacing.large} + ${props.level} * ${spacing.xxxxlarge})`,
      borderRadius: sizes.xxxxsmall,
    }),
  }),

  selected: stylex.create({
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
      menuItem: stylex.props(styles.mode.menuitem[mode]),
      item: stylex.props(
        styles.default.item,
        styles.size[size]({ level }),

        styles.mode.item[mode]({
          ...(isInline && {
            backgroundColor: theme.colors["surface-container-highest"],
          }),
          ...(isVertical && {
            backgroundColor: theme.colors["surface-container-highest"],
          }),
          ...(isHorizontal && {
            outlineColor: theme.colors.primary,
          }),
        }),

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

        typography.label[size],
      ),
    };

    return (
      <li role="menuitem" ref={ref} {...styled.menuItem}>
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
            placement={mode === "vertical" ? "top-start" : "bottom-start"}
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
