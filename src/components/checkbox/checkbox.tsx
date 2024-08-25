import React, { type ChangeEvent, useContext, useMemo } from "react";
import { useControlledState, useEvent } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { CheckboxClassToken } from "../../utils/class-name";
import clsx from "clsx";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
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
        primaryColor: theme.colors[ColorToken.Primary],
        onPrimaryColor: theme.colors[ColorToken.OnPrimary],
        outlineColor: theme.colors[ColorToken.Outline],
      }),
    ),
    trigger: stylex.props(
      styles.trigger.default,
      isChecked && styles.trigger.checked,
      isDisabled &&
        styles.trigger.disabled({
          backgroundColor: theme.colors[ColorToken.OnSurface],
          color: theme.colors[ColorToken.OnPrimary],
        }),
      !isChecked && styles.trigger.unchecked,
    ),
    label: stylex.props(styles.label.default, typography.label.small),
  };

  return (
    <label
      className={clsx(
        styled.checkbox.className,
        className,
        classNames[CheckboxClassToken.Checkbox],
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
