import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import type { BreadcrumbItemProps } from "../../types/breadcrumb";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const styles = {
  navigation: $create({
    default: {
      ":last-of-type": {
        color: "var(--color-on-surface)",
      },
    },

    link: {
      paddingInline: spacing.xxxxxsmall,
      borderRadius: sizes.xxxxxxxxxsmall,
      backgroundColor: {
        default: null,
        ":hover": "var(--color-surface)",
      },
      color: {
        default: null,
        ":hover": "var(--color-on-surface)",
      },
      transitionProperty: "all",
      transitionDuration: duration.short,
    },
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
    navigation: $props(styles.navigation.default, isLink && styles.navigation.link),
    separator: $props(styles.separator.default),
  };

  return (
    <>
      <li
        className={stringify(classNames.item, styled.navigation.className)}
        style={{
          ...styled.navigation.style,
          "--color-surface": theme.colors.surface,
          "--color-on-surface": theme.colors["on-surface"],
        }}
      >
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
