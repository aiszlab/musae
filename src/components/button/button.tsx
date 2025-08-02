import type { ButtonProps } from "../../types/button";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { OPACITY } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useButton } from "./hooks";
import { Ripple } from "../ripple";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles, { TYPOGRAPHYS } from "./styles";

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
      shape = "round",
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
        disabled && [styles.disabled.default, styles.disabled[variant]],
        // shape styles
        styles.shape[shape].medium,
        styles.shape[shape][size],
        // typography
        TYPOGRAPHYS[size],
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
