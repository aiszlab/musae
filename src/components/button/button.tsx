import type { ButtonProps } from "musae/types/button";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";
import { elevations, OPACITY, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useButton } from "./hooks";
import { Ripple } from "../ripple";
import { typography } from "../theme/theme";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { useClassNames } from "../../hooks/use-class-names.component";
import { CLASS_NAMES } from "./context";

const styles = stylex.create({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xsmall,
    transitionProperty: "background-color, color, box-shadow",
    transitionDuration: "0.3s",
    willChange: "background-color, color, box-shadow",

    // reset styles
    borderWidth: sizes.none,
    backgroundColor: "transparent",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    cursor: "pointer",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  // with ripple
  ripple: {
    position: "relative",
  },

  small: {
    paddingBlock: spacing.xxxsmall,
    paddingInline: spacing.xsmall,
  },

  medium: {
    paddingBlock: spacing.small,
    paddingInline: spacing.xlarge,
  },

  rounded: {
    borderRadius: sizes.infinity,
  },

  filled: (props: { backgroundColor: string; color: string }) => ({
    borderWidth: sizes.none,
    backgroundColor: props.backgroundColor,
    color: props.color,

    ":hover": {
      boxShadow: elevations.xsmall,
    },
  }),

  outlined: (props: { color: string; hoveredBackgroundColor: string }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.color,
    color: props.color,

    ":hover": {
      backgroundColor: props.hoveredBackgroundColor,
    },
  }),

  text: (props: { color: string; hoveredBackgroundColor: string }) => ({
    color: props.color,

    ":hover": {
      backgroundColor: props.hoveredBackgroundColor,
    },
  }),

  disabled: (props: { color: string; backgroundColor: string; outlineColor: string | null }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    cursor: "not-allowed",
    boxShadow: null,
    borderColor: props.outlineColor,
  }),
});

/**
 * @author murukal
 *
 * @description
 * button
 * 1. diff from normal html button, this button is default type `button`, not `submit`
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      style,
      color = "primary",
      size = "medium",
      variant = "filled",
      shape = "rounded",
      disabled = false,
      ripple = true,
      type = "button",
      onClick: _onClick,
      prefix,
      suffix,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const { onClick, clear, ripples } = useButton({ onClick: _onClick });
    const classNames = useClassNames(CLASS_NAMES);

    const styled = {
      button: stylex.props(
        styles.button,
        ripple && styles.ripple,
        // size
        styles[size],
        // variant
        variant === "filled" &&
          styles.filled({
            backgroundColor: theme.colors[color],
            color: theme.colors[`on-${color}`],
          }),
        variant === "outlined" &&
          styles.outlined({
            color: theme.colors[color],
            hoveredBackgroundColor: hexToRgba(theme.colors.primary, OPACITY.thin, "style"),
          }),
        variant === "text" &&
          styles.text({
            color: theme.colors[color],
            hoveredBackgroundColor: hexToRgba(theme.colors.primary, OPACITY.thin, "style"),
          }),
        // shape
        styles[shape],
        // disabled
        disabled &&
          styles.disabled({
            backgroundColor:
              variant === "filled"
                ? hexToRgba(theme.colors["on-surface"], OPACITY.medium, "style")
                : "transparent",
            color: hexToRgba(theme.colors["on-surface"], OPACITY.thicker, "style"),
            outlineColor:
              variant === "outlined"
                ? hexToRgba(theme.colors["on-surface"], OPACITY.thicker, "style")
                : null,
          }),
        // text font
        size === "small" && typography.label.medium,
        size !== "small" && typography.label.large,
      ),
    };

    return (
      <button
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        className={stringify(classNames.button, className, styled.button.className)}
        style={{
          ...styled.button.style,
          ...style,
        }}
        type={type}
        {...props}
      >
        {prefix}
        {children}
        {suffix}
        {ripple && <Ripple ripples={ripples} onClear={clear} />}
      </button>
    );
  },
);

export default Button;
export { styles };
