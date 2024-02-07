import type { ButtonProps } from "./types";
import React, { type CSSProperties, forwardRef } from "react";
import { useClassNames } from "../config";
import { ButtonClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useButton } from "./hooks";
import { Ripple } from "../ripple";
import { typography } from "../theme/theme";

const styles = stylex.create({
  button: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
    transition: "background-color 300ms",
    willChange: "background-color",
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
});

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, style, color = "primary", size = "medium", variant = "filled", shape = "round", ...props },
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
            backgroundColor: theme.colors[ColorToken.Primary],
            color: theme.colors[ColorToken.OnPrimary],
          }),
        variant === "outlined" &&
          styles.outlined({
            color: theme.colors[ColorToken.Primary],
          }),
        // shape
        styles[shape]
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
      >
        {props.prefix}
        {children}
        <Ripple ripples={ripples} onClear={clear} />
      </button>
    );
  }
);

export default Button;
