import React from "react";
import { stringify } from "@aiszlab/relax/class-name";
import type { TagProps } from "../../types/tag";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Close } from "../icon/icons";
import { CLASS_NAMES } from "./context";
import { $label } from "../theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = {
  tag: $create({
    default: {
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      width: sizes.fit,
      boxSizing: "border-box",
    },
  }),

  size: $create({
    small: {
      borderRadius: spacing.xxxxxsmall,
      gap: spacing.xxxxxsmall,
      height: sizes.small,
      "--padding-inline": spacing.xxsmall,
    },

    medium: {
      borderRadius: spacing.xxxsmall,
      gap: spacing.xxxsmall,
      height: sizes.medium,
      "--padding-inline": spacing.medium,
    },

    large: {
      paddingInline: spacing.large,
      borderRadius: spacing.xxsmall,
      gap: spacing.xxsmall,
      height: sizes.large,
      "--padding-inline": spacing.large,
    },
  }),

  variant: $create({
    filled: {
      backgroundColor: "var(--color-primary-container)" satisfies ThemeColorVariable,
      color: "var(--color-on-primary-container)" satisfies ThemeColorVariable,
      paddingInline: "var(--padding-inline)",
    },

    outlined: {
      backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      color: "inherit",
      paddingInline: `calc(var(--padding-inline) - ${spacing.smallest})`,
    },
  }),
};

const Tag = ({
  children,
  variant = "filled",
  size = "medium",
  className,
  style,
  closable = false,
  onClose,
  onClick,
  leading,
}: TagProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const _themeColorVars = useThemeColorVars([
    "primary-container",
    "on-primary-container",
    "surface",
    "on-surface-variant",
    "outline",
  ]);

  const styled = $props(
    $label[size],
    styles.tag.default,
    styles.size[size],
    styles.variant[variant],
  );

  return (
    <span
      className={stringify(classNames.tag, className, styled.className)}
      style={{
        ...styled.style,
        ..._themeColorVars,
        ...style,
      }}
      onClick={onClick}
    >
      {leading}
      {children}
      {closable && <Close onClick={onClose} />}
    </span>
  );
};

export default Tag;
