import React, { useContext, type CSSProperties } from "react";
import { $create, $props } from "../../utils/styles";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import type { BreadcrumbItemProps } from "../../types/breadcrumb";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const styles = {
  navigation: $create({
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

  separator: $create({
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
    navigation: $props(
      styles.navigation.default({ color: theme.colors["on-surface"] }),
      isLink &&
        styles.navigation.link({
          hoveredBackgroundColor: theme.colors.surface,
          hoveredColor: theme.colors["on-surface"],
        }),
    ),
    separator: $props(styles.separator.default),
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
