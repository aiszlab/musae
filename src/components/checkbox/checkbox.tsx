import React, { type ChangeEvent, useContext, useMemo } from "react";
import { isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
import Context, { CLASS_NAMES } from "./context";
import type { CheckboxProps } from "../../types/checkbox";
import { props as $props } from "@stylexjs/stylex";
import styles from "./styles";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import Check from "./check";
import Indeterminate from "./Indeterminate";
import { Ripple, useRipple } from "../ripple";
import { OPACITY } from "../theme/tokens.stylex";
import { stopPropagation } from "@aiszlab/relax/dom";
import { $label } from "../theme/theme";
import { useThemeColorVars } from "src/hooks/use-theme-color-vars";

const Checkbox = ({
  value,
  className,
  style,
  children,
  onChange,
  disabled = false,
  checked,
  indeterminate = false,
  ripple = true,
  invalid = false,
  defaultChecked = false,
}: CheckboxProps) => {
  const contextValue = useContext(Context);
  const classNames = useClassNames(CLASS_NAMES);
  const isDisabled = contextValue?.isDisabled ?? disabled;

  const themeColorVars = useThemeColorVars([
    "primary",
    ["primary", OPACITY.thin],
    ["primary", OPACITY.medium],
    ["primary", OPACITY.thicker],
    "on-primary",
    "on-surface",
    ["on-surface", OPACITY.thin],
    ["on-surface", OPACITY.medium],
    ["on-surface", OPACITY.thicker],
    "on-surface-variant",
    "error",
    ["error", OPACITY.thin],
    ["error", OPACITY.medium],
    ["error", OPACITY.thicker],
    "on-error",
  ]);

  const { ripples, add, clear } = useRipple({ isDisabled: !ripple || isDisabled });
  const [_isChecked, _setIsChecked] = useControlledState<boolean>(checked, {
    defaultState: defaultChecked,
  });

  // check current checkbox is checked
  // if there is context value, use context value
  // else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (!contextValue || isUndefined(value)) return _isChecked;
    return contextValue.value.has(value);
  }, [_isChecked, contextValue, value]);

  // change handler
  // if there is context value, just notify context
  // else change the controlled state
  const change = useEvent((event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;

    const checked = event.target.checked;

    if (!isUndefined(value)) {
      contextValue?.change(value, checked);
    }

    _setIsChecked(checked);
    onChange?.(event);
  });

  const styled = {
    checkbox: $props(
      styles.checkbox.default,
      styles.checkbox.medium,
      isDisabled && styles.checkbox.disabled,
    ),
    layer: $props(
      styles.layer.default.default,
      ripple && [
        styles.layer.rippleable.default,
        (isChecked || indeterminate) && styles.layer.rippleable.checked,
        invalid && styles.layer.rippleable.invalid,
        isDisabled && styles.layer.rippleable.disabled,
      ],
    ),
    inputer: $props(
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
    input: $props(styles.input.default),
    check: $props(styles.check.default),
    label: $props($label.small, styles.label.default, invalid && styles.label.invalid),
  };

  return (
    <label
      className={stringify(classNames.checkbox, className, styled.checkbox.className)}
      style={{
        ...styled.checkbox.style,
        ...style,
        ...themeColorVars,
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
            onClick={stopPropagation}
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
