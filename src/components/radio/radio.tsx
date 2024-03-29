import React, { CSSProperties, useCallback, useContext, useMemo } from "react";
import Context from "./context";
import { RadioProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, RadioClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import clsx from "clsx";

const styles = stylex.create({
  radio: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  disabled: {
    cursor: "not-allowed",
  },

  trigger: (props: { borderColor: CSSProperties["borderColor"] }) => ({
    visibility: "hidden",
    height: sizes.xsmall,
    width: sizes.xsmall,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "inherit",

    "::after": {
      content: "''",
      visibility: "visible",
      display: "block",
      height: "100%",
      width: "100%",
      boxSizing: "border-box",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: props.borderColor,
      borderRadius: sizes.infinity,
      transition: "all 0.2s",
    },
  }),

  checkedTrigger: (props: { borderColor: CSSProperties["borderColor"] }) => ({
    "::after": {
      borderColor: props.borderColor,
      borderWidth: "4px",
    },
  }),

  disabledCheckedTrigger: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    "::before": {
      content: "''",
      position: "absolute",
      visibility: "visible",
      height: sizes.xxsmall,
      width: sizes.xxsmall,
      backgroundColor: props.backgroundColor,
      borderRadius: sizes.infinity,
    },
  }),

  label: {
    paddingInline: spacing.xsmall,
  },
});

const Radio = ({ children, value, ...props }: RadioProps) => {
  const contextValue = useContext(Context);
  const [_isChecked, _setIsChecked] = useControlledState(props.checked);
  const classNames = useClassNames(ComponentToken.Radio);
  const theme = useTheme();

  const isDisabled = useMemo(
    () => contextValue?.isDisabled ?? props.disabled ?? false,
    [contextValue?.isDisabled, props.disabled]
  );

  /// check current radio is checked
  /// if current radio is in provider, use provider context value first
  /// or not, use isChecked property
  /// otherwise, it control itself
  const isChecked = useMemo(() => {
    if (contextValue) {
      return value === contextValue.value;
    }
    return !!_isChecked;
  }, [contextValue, _isChecked, value]);

  /// change handler for radio
  /// radio do not support cancel checked
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
    radio: stylex.props(styles.radio, isDisabled && styles.disabled),
    trigger: stylex.props(
      styles.trigger({
        borderColor: theme.colors[ColorToken.Outline],
      }),
      isChecked &&
        (isDisabled
          ? styles.disabledCheckedTrigger({
              backgroundColor: theme.colors[ColorToken.InversePrimary],
            })
          : styles.checkedTrigger({
              borderColor: theme.colors[ColorToken.Primary],
            }))
    ),
    label: stylex.props(typography.body.medium, styles.label),
  };

  return (
    <label className={clsx(styled.radio.className, classNames[RadioClassToken.Radio], props.className)}>
      <input
        type="radio"
        aria-checked={isChecked}
        checked={isChecked}
        onChange={change}
        disabled={isDisabled}
        className={styled.trigger.className}
        style={styled.trigger.style}
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
