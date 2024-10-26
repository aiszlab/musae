import React, { type ChangeEvent, useContext, useMemo } from "react";
import { useControlledState, useEvent, clsx } from "@aiszlab/relax";
import Context, { CLASS_NAMES } from "./context";
import type { CheckboxProps } from "musae/types/checkbox";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import styles from "./styles";
import { useClassNames } from "../../hooks/use-class-names.component";

const Checkbox = ({
  value,
  className,
  style,
  children,
  onChange,
  disabled = false,
  checked,
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
      styles.checkbox.variables({
        primary: theme.colors.primary,
        onPrimary: theme.colors["on-primary"],
        outline: theme.colors.outline,
        onSurface: theme.colors["on-surface"],
      }),
      styles.checkbox.default,
      isDisabled && styles.checkbox.disabled,
    ),
    input: stylex.props(styles.input.default),
    label: stylex.props(styles.label.default, typography.label.small),
  };

  return (
    <label
      className={clsx(classNames.check, className, styled.checkbox.className)}
      style={{
        ...styled.checkbox.style,
        ...style,
      }}
      aria-checked={isChecked}
      aria-disabled={isDisabled}
    >
      <input
        type="checkbox"
        className={clsx(classNames.input, styled.input.className)}
        style={styled.input.style}
        checked={isChecked}
        disabled={isDisabled}
        onChange={change}
        aria-checked={isChecked}
        aria-disabled={isDisabled}
      />

      {children && (
        <span className={clsx(classNames.label, styled.label.className)} style={styled.label.style}>
          {children}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
export { styles };
