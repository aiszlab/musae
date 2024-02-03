import type { ButtonProps } from "./types";
import React, { type CSSProperties, forwardRef } from "react";
import { useClassNames } from "../config";
import { ButtonClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  button: {
    borderRadius: sizes.infinity,
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
  },

  small: {
    paddingBlock: spacing.none,
    paddingInline: spacing.xsmall,
  },

  medium: {
    paddingBlock: spacing.small,
    paddingInline: spacing.xlarge,
  },

  large: {
    paddingBlock: spacing.medium,
    paddingInline: spacing.xxlarge,
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
  ({ children, className, onClick, style, color = "primary", size = "medium", variant = "filled", ...props }, ref) => {
    const classNames = useClassNames(ComponentToken.Button);
    const theme = useTheme();

    const styled = {
      button: stylex.props(
        styles.button,
        styles[size],
        variant === "filled" &&
          styles.filled({
            backgroundColor: theme.colors[ColorToken.Primary],
            color: theme.colors[ColorToken.OnPrimary],
          }),
        variant === "outlined" &&
          styles.outlined({
            color: theme.colors[ColorToken.Primary],
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
      >
        {props.prefix}
        {children && <span>{children}</span>}
      </button>
    );
  }
);

export default Button;
