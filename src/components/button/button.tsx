import type { ButtonProps } from "musae/types/button";
import React, { type CSSProperties, forwardRef } from "react";
import { ButtonClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { elevations, OPACITY, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useButton } from "./hooks";
import { Ripple } from "../ripple";
import { typography } from "../theme/theme";
import { useClassNames } from "../../hooks/use-class-names";
import { hexToRgba } from "@aiszlab/fuzzy/color";

const styles = stylex.create({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.small,
    transitionProperty: "all",
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
    paddingBlock: spacing.none,
    paddingInline: spacing.small,
  },

  medium: {
    paddingBlock: spacing.small,
    paddingInline: spacing.xlarge,
  },

  large: {
    paddingBlock: spacing.medium,
    paddingInline: spacing.xxlarge,
  },

  circular: {
    borderRadius: sizes.infinity,
    aspectRatio: 1,
    // circular shape, always center layout
    justifyContent: "center",
  },

  rounded: {
    borderRadius: sizes.infinity,
    minWidth: null,
  },

  filled: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
  }) => ({
    borderWidth: sizes.none,
    backgroundColor: props.backgroundColor,
    color: props.color,

    ":hover": {
      boxShadow: elevations.xsmall,
    },
  }),

  outlined: (props: {
    color: CSSProperties["color"];
    hoveredBackgroundColor: CSSProperties["backgroundColor"];
  }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.color,
    color: props.color,

    ":hover": {
      backgroundColor: props.hoveredBackgroundColor,
    },
  }),

  text: (props: {
    color: CSSProperties["color"];
    hoveredBackgroundColor: CSSProperties["backgroundColor"];
  }) => ({
    color: props.color,

    ":hover": {
      backgroundColor: props.hoveredBackgroundColor,
    },
  }),

  disabled: (props: {
    color: CSSProperties["color"];
    backgroundColor: CSSProperties["backgroundColor"];
    outlineColor: CSSProperties["borderColor"] | null;
  }) => ({
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
    const classNames = useClassNames("button");
    const theme = useTheme();
    const { onClick, clear, ripples } = useButton({ onClick: _onClick });

    const styled = {
      button: stylex.props(
        styles.button,
        ripple && styles.ripple,
        typography.label[size],
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
      ),
    };

    return (
      <button
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        className={clsx(classNames[ButtonClassToken.Button], className, styled.button.className)}
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
