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
import { useClassNames } from "../config";

export const styles = stylex.create({
  wrapper: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    minHeight: 36,
    minWidth: sizes.none,
    width: 240,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    cursor: "text",

    // border
    borderColor: props.outlineColor,
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderRadius: sizes.xxxsmall,

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxsmall,
    paddingInline: spacing.medium,
  }),

  focused: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderWidth: sizes.xxxxsmall,
    borderColor: props.outlineColor,
  }),

  invalid: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    borderColor: props.outlineColor,
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
const Input = forwardRef<InputRef, InputProps>(({ className, style, type, invalid, readOnly, ...props }, ref) => {
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
    }),
    []
  );

  /// controlled value
  const [_value, _setValue] = useControlledState(props.value!, { defaultState: "" });

  /// events
  const inputEvents = useInputEvents({
    setValue: _setValue,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onClick: props.onClick,
    onFocus: props.onFocus,
  });
  const wrapperEvents = useWrapperEvents({ inputRef });

  /// is focused
  const [isFocused, focusProps] = useFocus({ onBlur: inputEvents.blur, onFocus: inputEvents.focus });

  const styled = {
    wrapper: stylex.props(
      styles.wrapper({
        outlineColor: theme.colors[ColorToken.Outline],
      }),
      isFocused &&
        styles.focused({
          outlineColor: theme.colors[ColorToken.Primary],
        }),
      !!invalid &&
        styles.invalid({
          outlineColor: theme.colors[ColorToken.Error],
        })
    ),
    input: stylex.props(styles.input),
  };

  return (
    <div
      ref={wrapperRef}
      className={clsx(
        classNames[InputClassToken.Wrapper],
        {
          [classNames[InputClassToken.Focused]]: isFocused,
          [classNames[InputClassToken.Invalid]]: !!invalid,
        },
        className,
        styled.wrapper.className
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
      {/* prefix */}
      {props.prefix}

      {/* input */}
      <input
        name={props.name}
        value={_value}
        className={clsx(classNames[InputClassToken.Input], styled.input.className)}
        style={styled.input.style}
        type={type}
        ref={inputRef}
        aria-invalid={invalid}
        readOnly={readOnly}
        onChange={inputEvents.change}
        onClick={inputEvents.click}
        placeholder={props.placeholder}
        {...focusProps}
      />

      {/* suffix */}
      {props.suffix}
    </div>
  );
});

export default Input;
