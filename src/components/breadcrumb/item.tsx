import React, { type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { type BreadcrumbItemProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { BreadcrumbClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = {
  navigation: stylex.create({
    default: (props: { color: CSSProperties["color"] }) => ({
      ":last-of-type": {
        color: props.color,
      },
    }),

    link: (props: {
      hoveredBackgroundColor: CSSProperties["backgroundColor"];
      hoveredColor: CSSProperties["color"];
    }) => ({
      paddingInline: spacing.xxsmall,
      borderRadius: sizes.xxxxxsmall,
      backgroundColor: {
        default: null,
        ":hover": props.hoveredBackgroundColor,
      },
      color: {
        default: null,
        ":hover": props.hoveredColor,
      },
      transitionProperty: "all",
      transitionDuration: "0.2s",
    }),
  }),

  separator: stylex.create({
    default: {
      marginInline: spacing.small,
    },
  }),
};

const Item = ({ href, label, max, separator }: BreadcrumbItemProps) => {
  const theme = useTheme();
  const isLink = !!href;
  const classNames = useClassNames(ComponentToken.Breadcrumb);

  const styled = {
    navigation: stylex.props(
      styles.navigation.default({ color: theme.colors[ColorToken.OnSurface] }),
      isLink &&
        styles.navigation.link({
          hoveredBackgroundColor: theme.colors[ColorToken.Surface],
          hoveredColor: theme.colors[ColorToken.OnSurface],
        })
    ),
    separator: stylex.props(styles.separator.default),
  };

  return (
    <>
      <li className={classNames[BreadcrumbClassToken.Item]}>
        {isLink && <a href={href}>{label}</a>}
        {!isLink && label}
      </li>
      {!max && (
        <li
          role="separator"
          className={clsx(classNames[BreadcrumbClassToken.Separator], styled.separator.className)}
          style={styled.separator.style}
        >
          {separator}
        </li>
      )}
    </>
  );
};

export default Item;
