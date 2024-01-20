import type { ButtonProps } from "./types";
import React, { CSSProperties, forwardRef } from "react";
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
  },

  small: {
    paddingBlock: spacing.none,
    paddingInline: spacing.xsmall,
  },

  medium: {
    paddingBlock: spacing.small,
    paddingInline: spacing.xlarge,
  },

  filled: (backgroundColor: CSSProperties["backgroundColor"]) => ({
    backgroundColor,
    border: "none",
  }),

  outlined: (outline: CSSProperties["borderColor"]) => ({
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: outline,
  }),

  content: (color: CSSProperties["color"]) => ({
    marginInline: spacing.small,
    whiteSpace: "nowrap",
    color,
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

    const _variants = {
      filled: () => styles.filled(theme.colors[ColorToken.Primary]),
      outlined: () => styles.filled(theme.colors[ColorToken.Outline]),
      text: () => void 0,
    };

    const styled = {
      button: stylex.props(styles.button, _variants[variant](), styles[size]),
      content: stylex.props(
        styles.content(
          variant === "text" || variant === "outlined"
            ? theme.colors[ColorToken.Primary]
            : theme.colors[ColorToken.OnPrimary]
        )
      ),
    };

    return (
      <button
        onClick={onClick}
        className={clsx(className, classNames[ButtonClassToken.Button], styled.button.className)}
        style={{
          ...styled.button.style,
          ...style,
        }}
        color={color}
        ref={ref}
      >
        <span {...styled.content}>{children}</span>
      </button>
    );
  }
);

export default Button;
