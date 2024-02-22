import React, { type CSSProperties, forwardRef } from "react";
import { MenuItemProps } from "./types";
import { useItemChildren, useMenuContext } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { useEvent } from "@aiszlab/relax";

const styles = {
  default: stylex.create({
    menuItem: {
      marginInline: spacing.xxsmall,
      marginBottom: spacing.xxsmall,
      marginTop: {
        default: spacing.none,
        ":first-child": spacing.xxsmall,
      },
    },

    item: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 300ms",
      willChange: "background-color, border, color",
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
      borderRadius: sizes.xxxsmall,
    }),

    medium: (props: { level: number }) => ({
      paddingBlock: spacing.small,
      paddingRight: spacing.medium,
      paddingLeft: `calc(${spacing.medium} + ${props.level} * ${spacing.xlarge})`,
      borderRadius: sizes.xxsmall,
    }),

    large: (props: { level: number }) => ({
      paddingBlock: spacing.medium,
      paddingRight: spacing.large,
      paddingLeft: `calc(${spacing.large} + ${props.level} * ${spacing.xxlarge})`,
      borderRadius: sizes.xsmall,
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
  ({ level, label, prefix, suffix, value, className, ...props }, ref) => {
    const { selectedKeys, expandedKeys, click: _click, toggle, variant, size } = useMenuContext();
    const classNames = useClassNames(ComponentToken.Menu);
    const isSelected = selectedKeys.has(value);
    const isExpanded = expandedKeys.has(value);
    const theme = useTheme();
    const hasChildren = !!props.children;

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
    });

    const styled = {
      menuItem: stylex.props(styles.default.menuItem),
      item: stylex.props(
        styles.default.item,
        styles.size[size]({ level }),
        styles.hovered[variant]({
          ...(variant === "text" && {
            color: theme.colors[ColorToken.OnPrimaryFixedVariant],
          }),
          ...(variant === "filled" && {
            backgroundColor: theme.colors[ColorToken.SurfaceContainer],
          }),
          ...(variant === "outlined" && {
            borderColor: theme.colors[ColorToken.SurfaceContainer],
          }),
        }),
        isSelected &&
          styles.selected[variant]({
            backgroundColor: theme.colors[ColorToken.SurfaceContainer],
            color: theme.colors[ColorToken.Primary],
          }),
        typography.label[size]
      ),
    };

    return (
      <li role="menuitem" ref={ref} {...styled.menuItem}>
        <div
          style={styled.item.style}
          className={clsx(classNames[MenuClassToken.Item], className, styled.item.className)}
          onClick={click}
        >
          {_children.prefix}
          {_children.label}
          {_children.suffix}
        </div>

        {props.children}
      </li>
    );
  }
);

export default Item;
