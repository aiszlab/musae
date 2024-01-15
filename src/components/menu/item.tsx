import React, { type CSSProperties, forwardRef } from "react";
import { MenuItemProps } from "./types";
import { useItemChildren, useMenuContext } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import { stylex } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { LABEL } from "../theme/theme";

type BackgroundColor = Required<CSSProperties>["backgroundColor"];
type Color = Required<CSSProperties>["color"];

const styles = stylex.create({
  normal: (level: number, hoveredBackgroundColor: BackgroundColor) => ({
    display: "flex",
    alignItems: "center",
    minHeight: 24,
    cursor: "pointer",

    // spacing
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
    paddingRight: spacing.medium,
    paddingLeft: 12 + (level ?? 0) * 24,

    borderRadius: 8,
    transition: "all 300ms",

    backgroundColor: {
      default: null,
      ":hover": hoveredBackgroundColor,
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

    const styled = stylex.props(
      styles.normal(level, theme.colors[ColorToken.SurfaceContainer]),
      isSelected && styles.selected(theme.colors[ColorToken.SurfaceContainer], theme.colors[ColorToken.Primary]),
      LABEL.large
    );

    return (
      <li role="menuitem" ref={ref}>
        <div
          style={styled.style}
          className={clsx(className, styled.className, classNames[MenuClassToken.Item])}
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
