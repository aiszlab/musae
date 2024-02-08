import type { ButtonProps } from "./types";
import React, { type CSSProperties, forwardRef } from "react";
import { useClassNames } from "../config";
import { ButtonClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
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
    willChange: "background-color, color",
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
  }),

  outlined: (props: { color: CSSProperties["color"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.color,
    color: props.color,
  }),

  disabled: (props: { color: CSSProperties["color"]; backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    cursor: "not-allowed",
  }),
});

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
        typography.body[size],
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
          }),
        // shape
        styles[shape],

        disabled &&
          styles.disabled({
            backgroundColor: layer(theme.colors[ColorToken.Surface], "medium"),
            color: layer(theme.colors[ColorToken.OnSurface], "thicker"),
          })
      ),
    };

    return (
      <button
        onClick={onClick}
        className={clsx(classNames[ButtonClassToken.Button], className, styled.button.className)}
        style={{
          ...styled.button.style,
          ...style,
        }}
        ref={ref}
        disabled={disabled}
      >
        {props.prefix}
        {children}
        <Ripple ripples={ripples} onClear={clear} />
      </button>
    );
  }
);

export default Button;
