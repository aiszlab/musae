import React, { type CSSProperties, useCallback, useContext, useMemo } from "react";
import { Context, CLASS_NAMES } from "./context";
import type { RadioProps } from "../../types/radio";
import { useControlledState } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  radio: $create({
    default: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },

    disabled: {
      cursor: "not-allowed",
    },
  }),

  input: $create({
    default: (props: { borderColor: CSSProperties["borderColor"] }) => ({
      visibility: "hidden",
      height: sizes.xxxxsmall,
      width: sizes.xxxxsmall,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "inherit",

      // reset styles
      margin: spacing.none,

      "::after": {
        content: "''",
        visibility: "visible",
        display: "block",
        height: sizes.full,
        width: sizes.full,
        boxSizing: "border-box",
        borderWidth: sizes.smallest,
        borderStyle: "solid",
        borderColor: props.borderColor,
        borderRadius: sizes.infinity,

        willChange: "border-color, border-width",
        transitionProperty: "border-color, border-width",
        transitionDuration: duration.short,
      },
    }),

    checked: (props: { borderColor: CSSProperties["borderColor"] }) => ({
      "::after": {
        borderColor: props.borderColor,
        borderWidth: sizes.xxxxxxxsmall,
      },
    }),

    disabled: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      "::after": {
        borderWidth: sizes.smallest,
        borderColor: props.backgroundColor,
      },

      "::before": {
        content: "''",
        position: "absolute",
        visibility: "visible",
        height: sizes.xxxxxxsmall,
        width: sizes.xxxxxxsmall,
        backgroundColor: props.backgroundColor,
        borderRadius: sizes.infinity,
      },
    }),

    unckecked: {
      "::before": {
        display: "none",
      },
    },
  }),

  label: $create({
    default: {
      paddingInline: spacing.xxxsmall,
    },
  }),
};

const Radio = ({ children, value, checked, disabled = false, ...props }: RadioProps) => {
  const contextValue = useContext(Context);
  const [_isChecked, _setIsChecked] = useControlledState(checked);
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();

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
      styles.input.default({
        borderColor: theme.colors.outline,
      }),
      isChecked &&
        styles.input.checked({
          borderColor: theme.colors.primary,
        }),
      isDisabled &&
        styles.input.disabled({
          backgroundColor: theme.colors["inverse-primary"],
        }),
      !isChecked && styles.input.unckecked,
    ),
    label: $props(typography.body.medium, styles.label.default),
  };

  return (
    <label className={stringify(classNames.radio, props.className, styled.radio.className)}>
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
