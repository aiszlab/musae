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

type BackgroundColor = Required<CSSProperties>["backgroundColor"];
type Color = Required<CSSProperties>["color"];

const styles = stylex.create({
  menuItem: {
    marginInline: spacing.xxsmall,
    marginBottom: spacing.xxsmall,

    ":first-child": {
      marginTop: spacing.xxsmall,
    },
  },

  normal: (props: { level: number; hoveredBackgroundColor: BackgroundColor }) => ({
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

  selected: (backgroundColor: BackgroundColor, color: Color) => ({
    backgroundColor,
    color,
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
        isSelected && styles.selected(theme.colors[ColorToken.SurfaceContainer], theme.colors[ColorToken.Primary]),
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
