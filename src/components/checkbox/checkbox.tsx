import React, { type ChangeEvent, useContext, useMemo } from "react";
import { useControlledState, useEvent, clsx } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "musae/types/checkbox";
import { useClassNames } from "../../hooks/use-class-names";
import { CheckboxClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { ComponentToken } from "../../utils/component-token";
import styles from "./styles";

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
  const classNames = useClassNames(ComponentToken.Checkbox);
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
      isDisabled && styles.checkbox.disabled,
      styles.checkbox.variables({
        primaryColor: theme.colors.primary,
        onPrimaryColor: theme.colors["on-primary"],
        outlineColor: theme.colors.outline,
      }),
    ),
    trigger: stylex.props(
      styles.trigger.default,
      isChecked && styles.trigger.checked,
      isDisabled &&
        styles.trigger.disabled({
          backgroundColor: theme.colors["on-surface"],
          color: theme.colors["on-primary"],
        }),
      !isChecked && styles.trigger.unchecked,
    ),
    label: stylex.props(styles.label.default, typography.label.small),
  };

  return (
    <label
      className={clsx(
        classNames[CheckboxClassToken.Checkbox],
        className,
        styled.checkbox.className,
      )}
      style={{
        ...styled.checkbox.style,
        ...style,
      }}
    >
      <input
        type="checkbox"
        className={styled.trigger.className}
        style={styled.trigger.style}
        checked={isChecked}
        aria-checked={isChecked}
        disabled={isDisabled}
        onChange={change}
      />

      {children && (
        <span className={styled.label.className} style={styled.label.style}>
          {children}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
export { styles };
