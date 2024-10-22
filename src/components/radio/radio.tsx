import React, { type CSSProperties, useCallback, useContext, useMemo } from "react";
import Context from "./context";
import type { RadioProps } from "musae/types/radio";
import { useControlledState, clsx } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { RadioClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";

const styles = {
  radio: stylex.create({
    default: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },

    disabled: {
      cursor: "not-allowed",
    },
  }),

  input: stylex.create({
    default: (props: { borderColor: CSSProperties["borderColor"] }) => ({
      visibility: "hidden",
      height: sizes.xxxsmall,
      width: sizes.xxxsmall,
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
        transitionDuration: "0.2s",
      },
    }),

    checked: (props: { borderColor: CSSProperties["borderColor"] }) => ({
      "::after": {
        borderColor: props.borderColor,
        borderWidth: sizes.xxxxxsmall,
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
        height: sizes.xxxxsmall,
        width: sizes.xxxxsmall,
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

  label: stylex.create({
    default: {
      paddingInline: spacing.xsmall,
    },
  }),
};

const Radio = ({ children, value, checked, disabled = false, ...props }: RadioProps) => {
  const contextValue = useContext(Context);
  const [_isChecked, _setIsChecked] = useControlledState(checked);
  const classNames = useClassNames("radio");
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
    radio: stylex.props(styles.radio.default, isDisabled && styles.radio.disabled),
    input: stylex.props(
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
    label: stylex.props(typography.body.medium, styles.label.default),
  };

  return (
    <label
      className={clsx(classNames[RadioClassToken.Radio], props.className, styled.radio.className)}
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
