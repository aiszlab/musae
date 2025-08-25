import React, { type CSSProperties } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import type { TagProps } from "../../types/tag";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { spacing } from "../theme/tokens.stylex";
import { Close } from "../icon/icons";
import { CLASS_NAMES } from "./context";
import { $label } from "../theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "src/hooks/use-theme-color-vars";

const styles = $create({
  tag: {
    backgroundColor: "var(--color-primary-container)" satisfies ThemeColorVariable,
    color: "var(--color-on-primary-container)" satisfies ThemeColorVariable,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
  },

  small: {
    paddingInline: spacing.xxsmall,
    paddingBlock: spacing.xxxxxsmall,
    borderRadius: spacing.xxxxxsmall,
    gap: spacing.xxxxxsmall,
  },

  medium: {
    paddingInline: spacing.medium,
    paddingBlock: spacing.xxxsmall,
    borderRadius: spacing.xxxsmall,
    gap: spacing.xxxsmall,
  },

  large: {
    paddingInline: spacing.large,
    paddingBlock: spacing.xxsmall,
    borderRadius: spacing.xxsmall,
    gap: spacing.xxsmall,
  },
});

const Tag = ({
  children,
  size = "medium",
  className,
  style,
  closable = false,
  onClose,
  leading,
}: TagProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const _themeColorVars = useThemeColorVars(["primary-container", "on-primary-container"]);

  const styled = $props($label[size], styles.tag, styles[size]);

  return (
    <span
      className={stringify(classNames.tag, className, styled.className)}
      style={{
        ...styled.style,
        ..._themeColorVars,
        ...style,
      }}
    >
      {leading}
      {children}
      {closable && <Close onClick={onClose} />}
    </span>
  );
};

export default Tag;
