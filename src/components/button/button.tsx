import type { ButtonProps } from "./types";
import React, { type CSSProperties, forwardRef } from "react";
import { ButtonClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useButton } from "./hooks";
import { Ripple } from "../ripple";
import { typography } from "../theme/theme";
import { ColorToken } from "../../utils/colors";
import { layer } from "../../utils/layer";
import { useClassNames } from "../../hooks/use-class-names";

const styles = stylex.create({
  button: {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.small,
    whiteSpace: "nowrap",
    transitionProperty: "all",
    transitionDuration: "0.3s",
    willChange: "background-color, color, box-shadow",
    flexShrink: 0,
  },

  small: {
    paddingBlock: spacing.none,
    paddingInline: spacing.small,
    minHeight: sizes.xsmall,
    minWidth: sizes.xsmall,
  },

  medium: {
    paddingBlock: spacing.small,
    paddingInline: spacing.xlarge,
    minHeight: sizes.xlarge,
    minWidth: sizes.xlarge,
  },

  large: {
    paddingBlock: spacing.medium,
    paddingInline: spacing.xxlarge,
    minHeight: sizes.xxlarge,
    minWidth: sizes.xxlarge,
  },

  circular: {
    borderRadius: sizes.infinity,
    padding: null,
    aspectRatio: 1,
    // circular shape, always center layout
    justifyContent: "center",
  },

  rounded: {
    borderRadius: sizes.infinity,
    minWidth: null,
  },

  filled: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    border: "none",
    backgroundColor: props.backgroundColor,
    color: props.color,
    boxShadow: {
      default: null,
      ":hover": elevations.xsmall,
    },
  }),

  outlined: (props: { color: CSSProperties["color"]; hoveredBackgroundColor: CSSProperties["backgroundColor"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.color,
    color: props.color,
    backgroundColor: {
      default: null,
      ":hover": props.hoveredBackgroundColor,
    },
  }),

  text: (props: { color: CSSProperties["color"]; hoveredBackgroundColor: CSSProperties["backgroundColor"] }) => ({
    color: props.color,
    backgroundColor: {
      default: null,
      ":hover": props.hoveredBackgroundColor,
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
    const classNames = useClassNames(ComponentToken.Button);
    const theme = useTheme();
    const { onClick, clear, ripples } = useButton({ onClick: _onClick });

    const styled = {
      button: stylex.props(
        styles.button,
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
            hoveredBackgroundColor: layer(theme.colors[ColorToken.Primary], "thin"),
          }),
        variant === "text" &&
          styles.text({
            color: theme.colors[color],
            hoveredBackgroundColor: layer(theme.colors[ColorToken.Primary], "thin"),
          }),
        // shape
        styles[shape],
        // disabled
        disabled &&
          styles.disabled({
            backgroundColor: variant === "filled" ? layer(theme.colors[ColorToken.OnSurface], "medium") : "transparent",
            color: layer(theme.colors[ColorToken.OnSurface], "thicker"),
            outlineColor: variant === "outlined" ? layer(theme.colors[ColorToken.OnSurface], "thicker") : null,
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
