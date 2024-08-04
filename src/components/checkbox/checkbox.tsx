import React, { type CSSProperties, type ChangeEvent, useContext, useMemo } from "react";
import { useControlledState, useEvent } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { CheckboxClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";
import { layers, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";

const styles = {
  checkbox: stylex.create({
    default: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
    },

    disabled: {
      opacity: layers.thicker,
      cursor: "not-allowed",
    },
  }),

  trigger: stylex.create({
    default: (props: { borderColor: CSSProperties["borderColor"] }) => ({
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
      color: CSSProperties["borderColor"];
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
        borderColor: props.color,
      },
    }),

    disabled: (props: {
      backgroundColor: CSSProperties["backgroundColor"];
      color: CSSProperties["borderColor"];
    }) => ({
      "::before": {
        backgroundColor: props.backgroundColor,
        borderColor: props.backgroundColor,
      },

      "::after": {
        borderColor: props.color,
      },
    }),

    unchecked: {
      "::before": {
        backgroundColor: null,
      },
    },
  }),

  label: stylex.create({
    default: {
      paddingInline: spacing.xsmall,
    },
  }),
};

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

  /// check current checkbox is checked
  /// if there is context value, use context value
  /// else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (!contextValue || !value) {
      return _isChecked;
    }
    return contextValue.value.has(value);
  }, [_isChecked, contextValue, value]);

  /// change handler
  /// if there is context value, just notify context
  /// else change the controlled state
  const change = useEvent((event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;

    const checked = event.target.checked;
    !!value && contextValue?.change(value, checked);
    _setIsChecked(checked);
    onChange?.(event);
  });

  const styled = {
    checkbox: stylex.props(styles.checkbox.default, isDisabled && styles.checkbox.disabled),
    trigger: stylex.props(
      styles.trigger.default({
        borderColor: theme.colors[ColorToken.Outline],
      }),
      isChecked &&
        styles.trigger.checked({
          backgroundColor: theme.colors[ColorToken.Primary],
          color: theme.colors[ColorToken.OnPrimary],
        }),
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
