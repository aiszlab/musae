import type { ButtonProps } from "../../types/button";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, elevations, OPACITY, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useButton } from "./hooks";
import { Ripple } from "../ripple";
import { $label } from "../theme/theme";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const styles = {
  button: $create({
    default: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.xxsmall,
      transitionProperty: "background-color, color, box-shadow",
      transitionDuration: duration.medium,
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
      height: "fit-content",
    },

    rippleable: {
      position: "relative",
    },
  }),

  variant: $create({
    filled: {
      borderWidth: sizes.none,
      backgroundColor: "var(--color-button)",
      color: "var(--color-on-button)",

      ":hover": {
        boxShadow: elevations.xsmall,
      },
    },

    outlined: {
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-button)",
      color: "var(--color-button)",

      ":hover": {
        backgroundColor: "var(--color-button-opacity-08)",
      },
    },

    text: {
      color: "var(--color-button)",

      ":hover": {
        backgroundColor: "var(--color-button-opacity-08)",
      },
    },
  }),

  shape: $create({
    rounded: {
      borderRadius: sizes.infinity,
    },

    rectangular: {
      borderRadius: sizes.xxxxxxxsmall,
    },
  }),

  size: $create({
    small: {
      paddingBlock: spacing.xxxxxsmall,
      paddingInline: spacing.xxsmall,
    },

    medium: {
      paddingBlock: spacing.xsmall,
      paddingInline: spacing.xxlarge,
    },
  }),

  disabled: $create({
    default: {
      color: "var(--color-on-surface-opacity-38)",
      cursor: "not-allowed",
      boxShadow: null,
      borderColor: null,
      backgroundColor: null,

      ":hover": {
        boxShadow: null,
      },
    },

    filled: {
      backgroundColor: "var(--color-on-surface-opacity-12)",
    },

    outlined: {
      borderColor: "var(--color-on-surface-opacity-38)",
    },

    text: {},
  }),
};

/**
 * @author murukal
 *
 * @description button
 * diff from normal html button, this button is default type `button`, not `submit`
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
      button: $props(
        styles.button.default,
        ripple && styles.button.rippleable,
        styles.size[size],
        styles.variant[variant],
        styles.shape[shape],
        disabled && [styles.disabled.default, styles.disabled[variant]],
        size === "small" && $label.medium,
        size !== "small" && $label.large,
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
          // @ts-expect-error style vars
          "--color-button": theme.colors[color],
          "--color-on-button": theme.colors[`on-${color}`],
          "--color-button-opacity-08": hexToRgba(theme.colors[color], OPACITY.thin).toString(),
          "--color-on-surface-opacity-12": hexToRgba(
            theme.colors["on-surface"],
            OPACITY.medium,
          ).toString(),
          "--color-on-surface-opacity-38": hexToRgba(
            theme.colors["on-surface"],
            OPACITY.thickest,
          ).toString(),
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
