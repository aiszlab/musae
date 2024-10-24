import React, { type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import type { BreadcrumbItemProps } from "musae/types/breadcrumb";
import { useClassNames } from "../../hooks/use-class-names";
import { BreadcrumbClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";

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
      paddingInline: spacing.xxxsmall,
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
  const classNames = useClassNames("breadcrumb");

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
