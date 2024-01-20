import React, { CSSProperties, ChangeEventHandler, useCallback, useContext, useMemo } from "react";
import { useControlledState } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";
import { useClassNames } from "../config";
import { CheckboxClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { LABEL } from "../theme/theme";

const styles = stylex.create({
  checkbox: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  trigger: (borderColor: CSSProperties["borderColor"]) => ({
    margin: spacing.none,
    visibility: "hidden",
    cursor: "inherit",
    width: spacing.large,
    height: spacing.large,

    "::before": {
      content: "''",
      visibility: "visible",
      display: "block",
      boxSizing: "border-box",
      width: "1rem",
      height: "1rem",
      borderRadius: "0.2rem",
      transition: "all 200ms",

      borderWidth: "0.1rem",
      borderStyle: "solid",
      borderColor: borderColor,
    },
  }),

  checked: (backgroundColor: string, color: CSSProperties["borderColor"]) => ({
    "::before": {
      backgroundColor,
      borderColor: backgroundColor,
    },

    "::after": {
      content: "''",
      visibility: "visible",
      boxSizing: "border-box",
      position: "absolute",
      display: "block",
      width: spacing.xxsmall,
      height: spacing.small,
      transform: "translate(200%, -150%) rotate(45deg)",

      borderWidth: spacing.xxxsmall,
      borderTop: 0,
      borderLeft: 0,
      borderStyle: "solid",
      borderColor: color,
    },
  }),

  label: {
    paddingInline: spacing.xsmall,
  },
});

const Checkbox = ({ value, className, style, children, ...props }: CheckboxProps) => {
  const contextValue = useContext(Context);
  const classNames = useClassNames(ComponentToken.Checkbox);
  const theme = useTheme();

  const [_isChecked, _setIsChecked] = useControlledState(props.checked!, {
    defaultState: false,
  });

  /// check current checkbox is checked
  /// if there is context value, use context value
  /// else use controlled state
  const isChecked = useMemo<boolean>(
    () => (contextValue ? contextValue.value.has(value) : _isChecked),
    [_isChecked, contextValue, value]
  );

  /// change handler
  /// if there is context value, just notify context
  /// else change the controlled state
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      contextValue?.change(value);
      _setIsChecked(event.target.checked);
    },
    [_setIsChecked, contextValue, value]
  );

  const styled = {
    checkbox: stylex.props(styles.checkbox),
    trigger: stylex.props(
      styles.trigger(theme.colors[ColorToken.Outline]),
      isChecked && styles.checked(theme.colors[ColorToken.Primary], theme.colors[ColorToken.OnPrimary])
    ),
    label: stylex.props(LABEL.small, styles.label),
  };

  return (
    <label
      className={clsx(styled.checkbox.className, className, classNames[CheckboxClassToken.Checkbox])}
      style={styled.checkbox.style}
    >
      <input
        type="checkbox"
        className={styled.trigger.className}
        style={{
          ...styled.trigger.style,
          ...style,
        }}
        checked={isChecked}
        aria-checked={isChecked}
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
