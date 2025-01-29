import React, { type ChangeEvent, useContext, useMemo, useRef } from "react";
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

const Checkbox = ({
  value,
  className,
  style,
  children,
  onChange,
  disabled = false,
  checked,
  indeterminate = false,
}: CheckboxProps) => {
  const contextValue = useContext(Context);
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();
  const isDisabled = useMemo(() => contextValue?.isDisabled ?? disabled, [contextValue, disabled]);

  const [_isChecked, _setIsChecked] = useControlledState(checked, {
    defaultState: false,
  });

  // check current checkbox is checked
  // if there is context value, use context value
  // else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (!contextValue || !value) {
      return _isChecked;
    }
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
    inputer: stylex.props(
      styles.inputer.default,
      (isChecked || indeterminate) && styles.inputer.checked,
    ),
    input: stylex.props(styles.input.default),
    check: stylex.props(styles.check.default),
    label: stylex.props(styles.label.default, typography.label.small),
  };

  return (
    <label
      className={stringify(classNames.check, className, styled.checkbox.className)}
      style={{
        ...styled.checkbox.style,
        ...style,
        // @ts-expect-error
        "--on-surface-variant": theme.colors["on-surface-variant"],
        "--primary": theme.colors.primary,
      }}
      aria-checked={isChecked}
      aria-disabled={isDisabled}
    >
      <span className={styled.inputer.className} style={styled.inputer.style}>
        <input
          type="checkbox"
          className={stringify(classNames.input, styled.input.className)}
          style={styled.input.style}
          checked={isChecked}
          disabled={isDisabled}
          onChange={change}
          aria-checked={isChecked}
          aria-disabled={isDisabled}
        />

        {isChecked && <Check className={styled.check.className} style={styled.check.style} />}

        {!isChecked && indeterminate && (
          <Indeterminate className={styled.check.className} style={styled.check.style} />
        )}
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
