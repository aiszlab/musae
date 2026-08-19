import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import type { BreadcrumbItemProps } from "../../types/breadcrumb";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const Item = ({ href, label, max, separator }: BreadcrumbItemProps) => {
  const theme = useTheme();
  const isLink = !!href;
  const { classNames } = useContext(Context);

  const styled = {
    navigation: $props(styles.item.navigation.default, isLink && styles.item.navigation.link),
    separator: $props(styles.item.separator.default),
    anchor: $props(styles.item.anchor.default),
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
        {isLink && (
          <a {...styled.anchor} href={href}>
            {label}
          </a>
        )}
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
