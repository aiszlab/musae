import React, { useContext, type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import type { BreadcrumbItemProps } from "musae/types/breadcrumb";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

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
      paddingInline: spacing.xxxxxsmall,
      borderRadius: sizes.xxxxxxxsmall,
      backgroundColor: {
        default: null,
        ":hover": props.hoveredBackgroundColor,
      },
      color: {
        default: null,
        ":hover": props.hoveredColor,
      },
      transitionProperty: "all",
      transitionDuration: duration.short,
    }),
  }),

  separator: stylex.create({
    default: {
      marginInline: spacing.xxsmall,
    },
  }),
};

const Item = ({ href, label, max, separator }: BreadcrumbItemProps) => {
  const theme = useTheme();
  const isLink = !!href;
  const { classNames } = useContext(Context);

  const styled = {
    navigation: stylex.props(
      styles.navigation.default({ color: theme.colors["on-surface"] }),
      isLink &&
        styles.navigation.link({
          hoveredBackgroundColor: theme.colors.surface,
          hoveredColor: theme.colors["on-surface"],
        }),
    ),
    separator: stylex.props(styles.separator.default),
  };

  return (
    <>
      <li className={classNames.item}>
        {isLink && <a href={href}>{label}</a>}
        {!isLink && label}
      </li>
      {!max && (
        <li
          role="separator"
          className={stringify(classNames.separator, styled.separator.className)}
          style={styled.separator.style}
        >
          {separator}
        </li>
      )}
    </>
  );
};

export default Item;
