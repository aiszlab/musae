import React, { type ChangeEvent, useContext, useMemo } from "react";
import { useControlledState, useEvent } from "@aiszlab/relax";
import Context, { CLASS_NAMES } from "./context";
import type { CheckboxProps } from "../../types/checkbox";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import styles from "./styles";
import { useClassNames } from "../../hooks/use-class-names.component";
import { stringify } from "@aiszlab/relax/class-name";
import Check from "./check";
import Indeterminate from "./Indeterminate";
import { Ripple, useRipple } from "../ripple";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { OPACITY } from "../theme/tokens.stylex";

const Checkbox = ({
  value,
  className,
  style,
  children,
  onChange,
  disabled: _disabled = false,
  checked,
  indeterminate = false,
  ripple = true,
  invalid = false,
}: CheckboxProps) => {
  const contextValue = useContext(Context);
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

  const isDisabled = contextValue?.isDisabled ?? _disabled;

  const { ripples, add, clear } = useRipple({ isDisabled: !ripple || isDisabled });
  const [_isChecked, _setIsChecked] = useControlledState(checked, {
    defaultState: false,
  });

  // check current checkbox is checked
  // if there is context value, use context value
  // else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (!contextValue || !value) return _isChecked;
    return contextValue.value.has(value);
  }, [_isChecked, contextValue, value]);

  // change handler
  // if there is context value, just notify context
  // else change the controlled state
  const change = useEvent((event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;

    const checked = event.target.checked;
    !!value && contextValue?.change(value, checked);
    _setIsChecked(checked);
    onChange?.(event);
  });

  const styled = {
    checkbox: stylex.props(
      styles.checkbox.default,
      styles.checkbox.medium,
      isDisabled && styles.checkbox.disabled,
    ),
    layer: stylex.props(
      styles.layer.default.default,
      ripple && [
        styles.layer.rippleable.default,
        (isChecked || indeterminate) && styles.layer.rippleable.checked,
        invalid && styles.layer.rippleable.invalid,
        isDisabled && styles.layer.rippleable.disabled,
      ],
    ),
    inputer: stylex.props(
      styles.inputer.default.default,
      isDisabled && styles.inputer.default.disabled,
      (isChecked || indeterminate) && [
        styles.inputer.checked.default,
        isDisabled && styles.inputer.checked.disabled,
      ],
      invalid && [
        styles.inputer.invalid.default,
        (isChecked || indeterminate) && styles.inputer.invalid.checked,
        isDisabled && styles.inputer.invalid.disabled,
      ],
    ),
    input: stylex.props(styles.input.default),
    check: stylex.props(styles.check.default),
    label: stylex.props(
      styles.label.default,
      invalid && styles.label.invalid,
      typography.label.small,
    ),
  };

  return (
    <label
      className={stringify(classNames.check, className, styled.checkbox.className)}
      style={{
        ...styled.checkbox.style,
        ...style,
        // @ts-expect-error
        "--primary": theme.colors.primary,
        "--primary-opacity-08": hexToRgba(theme.colors.primary, OPACITY.thin, "style"),
        "--primary-opacity-12": hexToRgba(theme.colors.primary, OPACITY.medium, "style"),
        "--primary-opacity-20": hexToRgba(theme.colors.primary, OPACITY.thicker, "style"),
        "--on-primary": theme.colors["on-primary"],
        "--on-surface": theme.colors["on-surface"],
        "--on-surface-opacity-08": hexToRgba(theme.colors["on-surface"], OPACITY.thin, "style"),
        "--on-surface-opacity-12": hexToRgba(theme.colors["on-surface"], OPACITY.medium, "style"),
        "--on-surface-opacity-20": hexToRgba(theme.colors["on-surface"], OPACITY.thicker, "style"),
        "--on-surface-variant": theme.colors["on-surface-variant"],
        "--error": theme.colors.error,
        "--error-opacity-08": hexToRgba(theme.colors.error, OPACITY.thin, "style"),
        "--error-opacity-12": hexToRgba(theme.colors.error, OPACITY.medium, "style"),
        "--error-opacity-20": hexToRgba(theme.colors.error, OPACITY.thicker, "style"),
        "--on-error": theme.colors["on-error"],
      }}
      aria-checked={isChecked}
      aria-disabled={isDisabled}
    >
      <span
        className={stringify(classNames.layer, styled.layer.className)}
        style={styled.layer.style}
        onClick={add}
      >
        <span
          className={stringify(classNames.inputer, styled.inputer.className)}
          style={styled.inputer.style}
        >
          <input
            type="checkbox"
            className={stringify(classNames.input, styled.input.className)}
            style={styled.input.style}
            checked={isChecked}
            disabled={isDisabled}
            onChange={change}
            aria-checked={isChecked}
            aria-disabled={isDisabled}
            onClick={(e) => e.stopPropagation()}
          />

          {isChecked && <Check className={styled.check.className} style={styled.check.style} />}

          {!isChecked && indeterminate && (
            <Indeterminate className={styled.check.className} style={styled.check.style} />
          )}
        </span>

        {ripple && <Ripple ripples={ripples} onClear={clear} />}
      </span>

      {children && (
        <span
          className={stringify(classNames.label, styled.label.className)}
          style={styled.label.style}
        >
          {children}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
export { styles };
