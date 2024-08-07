import React, { type CSSProperties, forwardRef, useRef } from "react";
import { MenuItemProps } from "./types";
import { useItemChildren, useMenuContext } from "./hooks";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { useEvent, useHover } from "@aiszlab/relax";
import { Popper } from "../popper";
import { useLazyBoolean } from "../../hooks/use-lazy-boolean";

const styles = {
  default: stylex.create({
    item: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",

      willChange: "background-color, border, color",
      transitionProperty: "background-color, border, color",
      transitionDuration: "0.1s",
    },
  }),

  hovered: stylex.create({
    filled: (props: Pick<CSSProperties, "backgroundColor" | "color" | "borderColor">) => ({
      backgroundColor: {
        default: null,
        ":hover": props.backgroundColor,
      },
    }),

    outlined: (props: Pick<CSSProperties, "backgroundColor" | "color" | "borderColor">) => ({
      border: {
        default: null,
        ":hover": `${sizes.smallest} solid ${props.borderColor}`,
      },
    }),

    text: (props: Pick<CSSProperties, "backgroundColor" | "color" | "borderColor">) => ({
      color: {
        default: null,
        ":hover": props.color,
      },
    }),
  }),

  selected: stylex.create({
    filled: (props: Pick<CSSProperties, "backgroundColor" | "color">) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    outlined: (props: Pick<CSSProperties, "backgroundColor" | "color">) => ({
      backgroundColor: props.backgroundColor,
      color: props.color,
    }),

    text: (props: Pick<CSSProperties, "backgroundColor" | "color">) => ({
      color: props.color,
    }),
  }),

  size: stylex.create({
    small: (props: { level: number }) => ({
      paddingBlock: spacing.xxsmall,
      paddingRight: spacing.small,
      paddingLeft: `calc(${spacing.small} + ${props.level} * ${spacing.large})`,
      borderRadius: sizes.xxxxxsmall,
    }),

    medium: (props: { level: number }) => ({
      paddingBlock: spacing.small,
      paddingRight: spacing.medium,
      paddingLeft: `calc(${spacing.medium} + ${props.level} * ${spacing.xlarge})`,
      borderRadius: sizes.xxxxsmall,
    }),

    large: (props: { level: number }) => ({
      paddingBlock: spacing.medium,
      paddingRight: spacing.large,
      paddingLeft: `calc(${spacing.large} + ${props.level} * ${spacing.xxlarge})`,
      borderRadius: sizes.xxxsmall,
    }),
  }),

  mode: {
    menuitem: stylex.create({
      horizontal: {},

      vertical: {
        marginBottom: spacing.xxsmall,
        marginTop: {
          default: spacing.none,
          ":first-child": spacing.xxsmall,
        },
      },

      inline: {
        marginBottom: spacing.xxsmall,
        marginTop: {
          default: spacing.none,
          ":first-child": spacing.xxsmall,
        },
      },
    }),

    item: stylex.create({
      horizontal: {},

      vertical: {},

      inline: {},
    }),
  },
};

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ level, label, prefix, suffix, value, className, mode, ...props }, ref) => {
    const { selectedKeys, expandedKeys, click: _click, toggle, variant, size } = useMenuContext();
    const classNames = useClassNames(ComponentToken.Menu);
    const isSelected = selectedKeys.has(value);
    const isExpanded = expandedKeys.has(value);
    const theme = useTheme();
    const hasChildren = !!props.children;
    const itemRef = useRef<HTMLDivElement | null>(null);
    const isInline = mode === "inline";

    // delay disappear after hover leave
    const [isOpen, { turnOn, disappear }] = useLazyBoolean();
    const [, hoverProps] = useHover({
      onEnter: turnOn,
      onLeave: disappear,
    });

    const click = useEvent(() => {
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
        styles.hovered[variant]({
          ...(variant === "text" && {
            color: theme.colors[ColorToken.OnPrimaryFixedVariant],
          }),
          ...(variant === "filled" && {
            backgroundColor: theme.colors[ColorToken.SurfaceContainerHighest],
          }),
          ...(variant === "outlined" && {
            borderColor: theme.colors[ColorToken.SurfaceContainerHighest],
          }),
        }),
        isSelected &&
          styles.selected[variant]({
            backgroundColor: theme.colors[ColorToken.SurfaceContainerHighest],
            color: theme.colors[ColorToken.Primary],
          }),
        typography.label[size],
      ),
    };

    return (
      <li role="menuitem" ref={ref} {...styled.menuItem}>
        <div
          ref={itemRef}
          className={clsx(classNames[MenuClassToken.Item], className, styled.item.className)}
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
