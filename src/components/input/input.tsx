import React, { forwardRef, useRef, useImperativeHandle, type CSSProperties } from "react";
import { useInputEvents, useWrapperEvents } from "./hooks";
import type { InputProps, InputRef } from "./types";
import { useControlledState, useFocus } from "@aiszlab/relax";
import { ComponentToken, InputClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { useClassNames } from "../../hooks/use-class-names";
import { typography } from "../theme/theme";

export const styles = stylex.create({
  wrapper: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    display: "inline-flex",
    alignItems: "center",
    cursor: "text",
    borderRadius: sizes.xxxxxsmall,
    verticalAlign: "bottom",

    minHeight: sizes.medium,
    minWidth: sizes.xxxxxxlarge,
    maxWidth: sizes.full,

    // border, for flexible, in musae, we use boxShadow replace border
    // box shadow is not added into layout
    boxShadow: `inset 0px 0px 0px ${sizes.smallest} ${props.outlineColor}`,

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxsmall,
    paddingInline: spacing.medium,

    // animation
    transitionProperty: "box-shadow",
    transitionDuration: "0.2s",
    // fix: eliminate serrations, use gpu speed up by add `transform`
    willChange: "box-shadow, transform",
  }),

  focused: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    boxShadow: `inset 0px 0px 0px ${sizes.xxxxxxsmall} ${props.outlineColor}`,
  }),

  invalid: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    boxShadow: `inset 0px 0px 0px ${sizes.xxxxxxsmall} ${props.outlineColor}`,
  }),

  input: {
    backgroundColor: "transparent",
    outline: sizes.none,
    border: sizes.none,
    minWidth: sizes.none,
    height: sizes.auto,
    flex: 1,
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
      readOnly,
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
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const classNames = useClassNames(ComponentToken.Input);
    const theme = useTheme();

    useImperativeHandle<InputRef, InputRef>(
      ref,
      () => ({
        focus: () => {
          inputRef.current?.focus();
        },
        select: () => {
          inputRef.current?.select();
        },
      }),
      [],
    );

    /// controlled value
    const [_value, _setValue] = useControlledState(valueInProps, { defaultState: "" });

    /// events
    const inputEvents = useInputEvents({
      setValue: _setValue,
      onBlur,
      onChange,
      onClick,
      onFocus,
    });
    const wrapperEvents = useWrapperEvents({ inputRef });

    /// is focused
    const [isFocused, focusProps] = useFocus({
      onBlur: inputEvents.blur,
      onFocus: inputEvents.focus,
    });

    const styled = {
      wrapper: stylex.props(
        typography.body.medium,
        styles.wrapper({
          outlineColor: theme.colors[ColorToken.Outline],
        }),
        isFocused &&
          styles.focused({
            outlineColor: theme.colors[ColorToken.Primary],
          }),
        invalid &&
          styles.invalid({
            outlineColor: theme.colors[ColorToken.Error],
          }),
      ),
      input: stylex.props(styles.input),
    };

    return (
      <span
        ref={wrapperRef}
        className={clsx(
          classNames[InputClassToken.Wrapper],
          {
            [classNames[InputClassToken.Focused]]: isFocused,
            [classNames[InputClassToken.Invalid]]: !!invalid,
          },
          className,
          styled.wrapper.className,
        )}
        style={{
          ...styled.wrapper.style,
          ...style,
        }}
        tabIndex={-1}
        onFocus={wrapperEvents.focus}
        onBlur={wrapperEvents.blur}
        onClick={wrapperEvents.click}
      >
        {/* leading */}
        {leading}

        {/* input */}
        <input
          value={_value}
          className={clsx(classNames[InputClassToken.Input], styled.input.className)}
          style={styled.input.style}
          type={type}
          ref={inputRef}
          aria-invalid={invalid}
          readOnly={readOnly}
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
