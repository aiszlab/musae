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
import { LABEL } from "../theme/theme";

const styles = stylex.create({
  menuItem: {
    marginInline: spacing.xxsmall,
    marginBottom: spacing.xxsmall,
    marginTop: {
      default: spacing.none,
      ":first-child": spacing.xxsmall,
    },
  },

  normal: (props: { level: number; hoveredBackgroundColor: CSSProperties["backgroundColor"] }) => ({
    display: "flex",
    alignItems: "center",
    minHeight: sizes.small,
    cursor: "pointer",

    // spacing
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    paddingRight: spacing.medium,
    paddingLeft: 12 + props.level * 24,
    borderRadius: 8,
    transition: "all 300ms",

    backgroundColor: {
      default: null,
      ":hover": props.hoveredBackgroundColor,
    },
  }),

  selected: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
});

/**
 * @author murukal
 *
 * @description
 * menu item
 */
const Item = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ level, label, prefix, suffix, _key, className, ...props }, ref) => {
    const { selectedKeys } = useMenuContext();
    const classNames = useClassNames(ComponentToken.Menu);
    const isSelected = selectedKeys.has(_key);
    const theme = useTheme();

    const click = () => {
      props.onClick(_key);
    };

    const _children = useItemChildren({
      label,
      prefix,
      suffix,
    });

    const styled = {
      menuItem: stylex.props(styles.menuItem),
      item: stylex.props(
        styles.normal({
          level,
          hoveredBackgroundColor: theme.colors[ColorToken.SurfaceContainer],
        }),
        isSelected &&
          styles.selected({
            backgroundColor: theme.colors[ColorToken.SurfaceContainer],
            color: theme.colors[ColorToken.Primary],
          }),
        LABEL.large
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
