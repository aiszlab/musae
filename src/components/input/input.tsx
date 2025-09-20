import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { useInputEvents, useInputorEvents } from "./hooks";
import type { InputProps, InputRef } from "../../types/input";
import { useControlledState, useFocus } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, OPACITY, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useClassNames } from "../../hooks/use-class-names";
import { hexToRgba } from "@aiszlab/fuzzy/color";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { $body } from "../theme/theme";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

export const styles = $create({
  inputor: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "text",
    borderRadius: sizes.xxxxxxxxxsmall,
    verticalAlign: "bottom",
    outline: sizes.none,

    minHeight: sizes.medium,
    minWidth: sizes.none,
    width: sizes.full,

    // border, for flexible, in musae, we use boxShadow replace border
    // box shadow is not added into layout
    boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-outline)`,

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
      boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-primary)`,
    },
  },

  invalid: {
    boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-error)`,

    ":focus-within": {
      boxShadow: null,
    },
  },

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

  disabled: {
    backgroundColor: "var(--color-on-surface-opacity-08)" satisfies ThemeColorVariable,
    color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
    boxShadow: `0px 0px 0px ${sizes.smallest} var(--color-on-surface-opacity-38)`,
  },
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
      inputor: $props(
        $body.medium,
        styles.inputor,
        invalid && styles.invalid,
        disabled && styles.disabled,
      ),
      input: $props(styles.input),
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
          "--color-outline": theme.colors.outline,
          "--color-primary": theme.colors.primary,
          "--color-error": theme.colors.error,
          "--color-on-surface-opacity-08": hexToRgba(
            theme.colors["on-surface"],
            OPACITY.thin,
          ).toString(),
          "--color-on-surface-opacity-38": hexToRgba(
            theme.colors["on-surface"],
            OPACITY.thickest,
          ).toString(),
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
