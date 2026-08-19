import styles from "./styles";
import React, { useCallback, useContext, useMemo } from "react";
import { Context, CLASS_NAMES } from "./context";
import type { RadioProps } from "../../types/radio";
import { useControlledState } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Radio = ({ children, value, checked, disabled = false, ...props }: RadioProps) => {
  const contextValue = useContext(Context);
  const [_isChecked, _setIsChecked] = useControlledState(checked);
  const classNames = useClassNames(CLASS_NAMES);
  const _themeColorVars = useThemeColorVars(["outline", "primary", "inverse-primary"]);

  const isDisabled = useMemo(
    () => contextValue?.isDisabled ?? disabled,
    [contextValue?.isDisabled, disabled],
  );

  // check current radio is checked
  // if current radio is in provider, use provider context value first
  // or not, use isChecked property
  // otherwise, it control itself
  const isChecked = useMemo(() => {
    if (contextValue) {
      return value === contextValue.value;
    }
    return !!_isChecked;
  }, [contextValue, _isChecked, value]);

  // change handler for radio
  // radio do not support cancel checked
  const change = useCallback(() => {
    // if chekced, ignore
    if (isChecked) return;
    // if context is valid, change context state
    if (contextValue) {
      contextValue.change(value);
      return;
    }
    // change self state
    _setIsChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, contextValue, value, isDisabled]);

  const styled = {
    radio: $props(styles.radio.default, isDisabled && styles.radio.disabled),
    input: $props(
      styles.input.default,
      isChecked && styles.input.checked,
      isDisabled && styles.input.disabled,
      !isChecked && styles.input.unckecked,
    ),
    label: $props($body.medium, styles.label.default),
  };

  return (
    <label
      className={stringify(classNames.radio, props.className, styled.radio.className)}
      style={{
        ..._themeColorVars,
      }}
    >
      <input
        type="radio"
        aria-checked={isChecked}
        checked={isChecked}
        onChange={change}
        disabled={isDisabled}
        className={styled.input.className}
        style={styled.input.style}
      />

      {children && (
        <span className={styled.label.className} style={styled.label.style}>
          {children}
        </span>
      )}
    </label>
  );
};

export default Radio;
