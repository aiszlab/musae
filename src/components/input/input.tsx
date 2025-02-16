import React, { forwardRef, useRef, useImperativeHandle, type CSSProperties } from "react";
import { useInputEvents, useInputorEvents } from "./hooks";
import type { InputProps, InputRef } from "../../types/input";
import { useControlledState, useFocus } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { duration, OPACITY, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useClassNames } from "../../hooks/use-class-names";
import { typography } from "../theme/theme";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";

export const styles = stylex.create({
  inputor: (props: {
    outlineColor: CSSProperties["borderColor"];
    focusedOutlineColor: CSSProperties["borderColor"];
  }) => ({
    display: "inline-flex",
    alignItems: "center",
    cursor: "text",
    borderRadius: sizes.xxxxxxxsmall,
    verticalAlign: "bottom",
    outline: sizes.none,

    minHeight: sizes.medium,
    minWidth: sizes.xxxxxxxlarge,
    maxWidth: sizes.full,

    // border, for flexible, in musae, we use boxShadow replace border
    // box shadow is not added into layout
    boxShadow: `0px 0px 0px ${sizes.smallest} ${props.outlineColor}`,

    // reset styles
    boxSizing: "border-box",

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.medium,

    // animation
    transitionProperty: "box-shadow",
    transitionDuration: duration.short,
    // fix: eliminate serrations, use gpu speed up by add `transform`
    willChange: "box-shadow, transform",

    ":focus-within": {
      boxShadow: `0px 0px 0px ${sizes.xxxxxxxxsmall} ${props.focusedOutlineColor}`,
    },
  }),

  invalid: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    boxShadow: `0px 0px 0px ${sizes.xxxxxxxxsmall} ${props.outlineColor}`,

    ":focus-within": {
      boxShadow: null,
    },
  }),

  input: {
    // reset styles
    lineHeight: "inherit",
    padding: spacing.none,
    borderWidth: sizes.none,
    backgroundColor: "transparent",
    outline: sizes.none,
    minWidth: sizes.none,
    height: sizes.auto,
    flex: 1,
  },

  disabled: (props: { backgroundColor: string; color: string; outlineColor: string }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    boxShadow: `0px 0px 0px ${sizes.smallest} ${props.outlineColor}`,
  }),
});

/**
 * @author murukal
 *
 * @description
 * input component
 */
const Input = forwardRef<InputRef, InputProps>(
  (
    {
      className,
      style,
      type,
      invalid = false,
      disabled,
      maxLength,
      value: valueInProps,
      onBlur,
      onChange,
      onClick,
      onFocus,
      leading,
      trailing,
      variant = "outlined",
      ...inputProps
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const classNames = useClassNames(CLASS_NAMES);
    const theme = useTheme();

    useImperativeHandle<InputRef, InputRef>(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      select: () => {
        inputRef.current?.select();
      },
    }));

    // controlled value
    const [_value, _setValue] = useControlledState(valueInProps, { defaultState: "" });

    // input events
    const inputEvents = useInputEvents({
      setValue: _setValue,
      onBlur,
      onChange,
      onClick,
      onFocus,
    });
    // inputor events
    const inputorEvents = useInputorEvents({ inputRef });

    // is focused
    const [isFocused, focusProps] = useFocus({
      onBlur: inputEvents.blur,
      onFocus: inputEvents.focus,
    });

    const styled = {
      inputor: stylex.props(
        typography.body.medium,
        styles.inputor({
          outlineColor: theme.colors.outline,
          focusedOutlineColor: theme.colors.primary,
        }),
        invalid &&
          styles.invalid({
            outlineColor: theme.colors.error,
          }),
        disabled &&
          styles.disabled({
            backgroundColor: hexToRgba(theme.colors["on-surface"], OPACITY.thin, "style"),
            color: hexToRgba(theme.colors["on-surface"], OPACITY.thickest, "style"),
            outlineColor: hexToRgba(theme.colors["on-surface"], OPACITY.thickest, "style"),
          }),
      ),
      input: stylex.props(styles.input),
    };

    return (
      <span
        className={stringify(
          classNames.inputor,
          {
            [classNames.focused]: isFocused,
            [classNames.invalid]: !!invalid,
          },
          className,
          styled.inputor.className,
        )}
        style={{
          ...styled.inputor.style,
          ...style,
        }}
        onClick={inputorEvents.click}
        {...(!disabled && {
          tabIndex: -1,
        })}
      >
        {/* leading */}
        {leading}

        {/* input */}
        <input
          value={_value}
          className={stringify(classNames.input, styled.input.className)}
          style={styled.input.style}
          type={type}
          ref={inputRef}
          aria-invalid={invalid}
          disabled={disabled}
          onChange={inputEvents.change}
          onClick={inputEvents.click}
          maxLength={maxLength}
          {...inputProps}
          {...focusProps}
        />

        {/* trailing */}
        {trailing}
      </span>
    );
  },
);

export default Input;
