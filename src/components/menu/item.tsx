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
import { useEvent } from "@aiszlab/relax";

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
  ({ level, label, prefix, suffix, value, className, ...props }, ref) => {
    const { selectedKeys, expandedKeys, click: _click, toggle } = useMenuContext();
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
