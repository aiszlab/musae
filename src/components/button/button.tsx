import type { ButtonProps } from "./types";
import React, { type CSSProperties, forwardRef } from "react";
import { useClassNames } from "../config";
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

const styles = stylex.create({
  button: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
    transition: "all 300ms",
    willChange: "background-color, color, box-shadow",
  },

  small: {
    padding: `${spacing.none} ${spacing.xsmall}`,
    minHeight: sizes.medium,
    minWidth: sizes.medium,
  },

  medium: {
    padding: `${spacing.small} ${spacing.xlarge}`,
    minHeight: sizes.large,
    minWidth: sizes.large,
  },

  large: {
    padding: `${spacing.medium} ${spacing.xxlarge}`,
    minHeight: sizes.xlarge,
    minWidth: sizes.xlarge,
  },

  circle: {
    borderRadius: sizes.infinity,
    padding: null,
    aspectRatio: 1,
    // circle shape, always center layout
    justifyContent: "center",
  },

  round: {
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
      ":hover": layer(props.hoveredBackgroundColor, "thin"),
    },
  }),

  text: (props: { color: CSSProperties["color"]; hoveredBackgroundColor: CSSProperties["backgroundColor"] }) => ({
    color: props.color,
    backgroundColor: {
      default: null,
      ":hover": layer(props.hoveredBackgroundColor, "thin"),
    },
  }),

  disabled: (props: { color: CSSProperties["color"]; backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    color: layer(props.color, "thicker"),
    cursor: "not-allowed",
    boxShadow: null,
  }),

  disabledOutline: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderColor: layer(props.outlineColor, "thicker"),
  }),
});

/**
 * @author murukal
 *
 * @description
 * button
 */
export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      style,
      color = "primary",
      size = "medium",
      variant = "filled",
      shape = "round",
      disabled = false,
      ripple = true,
      ...props
    },
    ref
  ) => {
    const classNames = useClassNames(ComponentToken.Button);
    const theme = useTheme();
    const { onClick, clear, ripples } = useButton({ onClick: props.onClick });

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
            hoveredBackgroundColor: theme.colors[ColorToken.Primary],
          }),
        variant === "text" &&
          styles.text({
            color: theme.colors[color],
            hoveredBackgroundColor: theme.colors[ColorToken.Primary],
          }),
        // shape
        styles[shape],
        // disabled
        disabled &&
          styles.disabled({
            backgroundColor: variant === "filled" ? layer(theme.colors[ColorToken.OnSurface], "medium") : "transparent",
            color: theme.colors[ColorToken.OnSurface],
          }),
        disabled &&
          variant === "outlined" &&
          styles.disabledOutline({
            outlineColor: theme.colors[ColorToken.OnSurface],
          }),
        props.styles
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
      >
        {props.prefix}
        {children}
        {ripple && <Ripple ripples={ripples} onClear={clear} />}
      </button>
    );
  }
);

export default _Button;
