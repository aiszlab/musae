import styles from "./styles";
import React from "react";
import type { SwitchProps } from "../../types/switch";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { props as $props } from "@stylexjs/stylex";
import { OPACITY } from "../theme/tokens.stylex";
import { IconClose, IconCheck } from "../icon/icons";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const Switch = ({
  value,
  style,
  className,
  icon = false,
  checkedChildren,
  uncheckedChildren,
  disabled = false,
  onChange,
  onClick,
}: SwitchProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [isChecked, setIsChecked] = useControlledState(value);

  const toggle = useEvent((event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    const _isChecked = !isChecked;
    setIsChecked(_isChecked);
    onChange?.(_isChecked);
  });

  const _themeColorVars = useThemeColorVars([
    "outline",
    "surface-container-highest",
    "on-surface-variant",
    "primary",
    "on-primary",
    "surface",
    "on-primary-container",
    ["on-surface", OPACITY.medium],
    ["surface-variant", OPACITY.medium],
    ["on-surface", OPACITY.thickest],
  ]);

  const styled = {
    switch: $props(
      styles.switch.base.base,
      isChecked && styles.switch.base.checked,
      disabled && styles.switch.disabled.base,
      disabled && isChecked && styles.switch.disabled.checked,
    ),
    slider: $props(
      styles.slider.base.base,
      icon && styles.slider.base.icon,
      isChecked && styles.slider.base.checked,
      disabled && styles.slider.disabled.base,
      disabled && isChecked && styles.slider.disabled.checked,
    ),
    supporting: $props(styles.supporting.base, isChecked && styles.supporting.checked),
    leading: $props(
      styles.supporting.child,
      styles.leading.base,
      isChecked && styles.leading.checked,
    ),
    trailing: $props(
      styles.supporting.child,
      styles.trailing.base,
      isChecked && styles.trailing.checked,
    ),
  };

  return (
    <button
      role="switch"
      type="button"
      disabled={disabled}
      aria-checked={isChecked}
      onClick={toggle}
      className={stringify(classNames.switch, className, styled.switch.className)}
      style={{
        ...styled.switch.style,
        ...style,
        ..._themeColorVars,
      }}
    >
      <div
        className={stringify(classNames.slider, styled.slider.className)}
        style={styled.slider.style}
      >
        {icon && (isChecked ? <IconCheck /> : <IconClose />)}
      </div>

      <span
        className={stringify(classNames.supporting, styled.supporting.className)}
        style={styled.supporting.style}
      >
        <span
          className={stringify(classNames.leading, styled.leading.className)}
          style={styled.leading.style}
        >
          {checkedChildren}
        </span>
        <span
          className={stringify(classNames.trailing, styled.trailing.className)}
          style={styled.trailing.style}
        >
          {uncheckedChildren}
        </span>
      </span>
    </button>
  );
};

export default Switch;
