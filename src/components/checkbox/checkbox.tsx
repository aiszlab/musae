import React, { type CSSProperties, type ChangeEventHandler, useCallback, useContext, useMemo } from "react";
import { useControlledState } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { CheckboxClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";

const styles = stylex.create({
  checkbox: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
  },

  trigger: (props: { borderColor: CSSProperties["borderColor"] }) => ({
    margin: spacing.none,
    visibility: "hidden",
    cursor: "inherit",
    width: spacing.large,
    height: spacing.large,
    position: "relative",

    "::before": {
      content: "''",
      visibility: "visible",
      display: "block",
      boxSizing: "border-box",
      width: sizes.xxxsmall,
      height: sizes.xxxsmall,
      borderRadius: spacing.xxsmall,
      transition: "all 0.2s",

      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: props.borderColor,
    },
  }),

  checked: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    triggerColor: CSSProperties["borderColor"];
  }) => ({
    "::before": {
      backgroundColor: props.backgroundColor,
      borderColor: props.backgroundColor,
    },

    "::after": {
      content: "''",
      visibility: "visible",
      boxSizing: "border-box",
      position: "absolute",
      display: "block",
      width: `calc(${sizes.xxxsmall} / 3)`,
      height: `calc(${sizes.xxxsmall} / 2)`,
      transform: "translate(100%, -160%) rotate(45deg)",

      borderWidth: spacing.xxxsmall,
      borderTopWidth: sizes.none,
      borderLeftWidth: sizes.none,
      borderStyle: "solid",
      borderColor: props.triggerColor,
    },
  }),

  label: {
    paddingInline: spacing.xsmall,
  },
});

const Checkbox = ({ value, className, style, children, onChange, ...props }: CheckboxProps) => {
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
    () => (contextValue && !!value ? contextValue.value.has(value) : _isChecked),
    [_isChecked, contextValue, value]
  );

  /// change handler
  /// if there is context value, just notify context
  /// else change the controlled state
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      !!value && contextValue?.change(value);
      _setIsChecked(event.target.checked);
      onChange?.(event);
    },
    [_setIsChecked, contextValue, value, onChange]
  );

  const styled = {
    checkbox: stylex.props(styles.checkbox),
    trigger: stylex.props(
      styles.trigger({
        borderColor: theme.colors[ColorToken.Outline],
      }),
      isChecked &&
        styles.checked({
          backgroundColor: theme.colors[ColorToken.Primary],
          triggerColor: theme.colors[ColorToken.OnPrimary],
        })
    ),
    label: stylex.props(typography.label.small, styles.label),
  };

  return (
    <label
      className={clsx(styled.checkbox.className, className, classNames[CheckboxClassToken.Checkbox])}
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
