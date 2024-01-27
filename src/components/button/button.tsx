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

  filled: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    backgroundColor: props.backgroundColor,
    border: "none",
  }),

  outlined: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: props.outlineColor,
  }),

  body: (props: { color: CSSProperties["color"] }) => ({
    marginInline: spacing.small,
    whiteSpace: "nowrap",
    color: props.color,
  }),

  prefix: {
    display: "inline-flex",

    ":not(:last-child)": {
      marginLeft: spacing.small,
    },
  },
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
      filled: () =>
        styles.filled({
          backgroundColor: theme.colors[ColorToken.Primary],
        }),
      outlined: () =>
        styles.outlined({
          outlineColor: theme.colors[ColorToken.Outline],
        }),
      text: () => void 0,
    };

    const styled = {
      button: stylex.props(styles.button, _variants[variant](), styles[size]),
      body: stylex.props(
        styles.body({
          color:
            variant === "text" || variant === "outlined"
              ? theme.colors[ColorToken.Primary]
              : theme.colors[ColorToken.OnPrimary],
        })
      ),
      prefix: stylex.props(styles.prefix),
    };

    return (
      <button
        onClick={onClick}
        className={clsx(classNames[ButtonClassToken.Button], className, styled.button.className)}
        style={{
          ...styled.button.style,
          ...style,
        }}
        color={color}
        ref={ref}
      >
        {props.prefix && (
          <span
            className={clsx(classNames[ButtonClassToken.Prefix], styled.prefix.className)}
            style={styled.prefix.style}
          >
            {props.prefix}
          </span>
        )}

        {children && <span {...styled.body}>{children}</span>}
      </button>
    );
  }
);

export default Button;
