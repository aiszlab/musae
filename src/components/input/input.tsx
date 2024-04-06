import React, { forwardRef, useRef, useImperativeHandle, useContext, CSSProperties } from "react";
import { useInputEvents, useStyles, useWrapperEvents } from "./hooks";
import type { InputProps, InputRef } from "./types";
import { useControlledState, useFocus } from "@aiszlab/relax";
import Context from "../config/context";
import { ComponentToken, InputClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  wrapper: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    minHeight: 36,
    minWidth: 0,
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
    borderWidth: 2,
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
 * @description input component
 */
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const _input = useRef<HTMLInputElement>(null);
  const _wrapper = useRef<HTMLDivElement>(null);
  const classNames = useContext(Context).classNames[ComponentToken.Input];
  const theme = useTheme();

  useImperativeHandle<InputRef, InputRef>(
    ref,
    () => ({
      focus: () => {
        _input.current?.focus();
      },
    }),
    []
  );

  /// controlled value
  const [_value, _setValue] = useControlledState(props.value ?? "");

  /// events
  const inputEvents = useInputEvents({
    setValue: _setValue,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onClick: props.onClick,
    onFocus: props.onFocus,
  });
  const wrapperEvents = useWrapperEvents([_input]);

  /// is focused
  const [isFocused, focusProps] = useFocus({ onBlur: inputEvents.blur, onFocus: inputEvents.focus });
  /// style
  const { wrapper: wrapperClassName } = useStyles([props.className, isFocused, props.invalid]);

  const styled = {
    wrapper: stylex.props(
      styles.wrapper({
        outlineColor: theme.colors[ColorToken.Outline],
      }),
      isFocused &&
        styles.focused({
          outlineColor: theme.colors[ColorToken.Primary],
        }),
      props.invalid &&
        styles.invalid({
          outlineColor: theme.colors[ColorToken.Error],
        })
    ),
    input: stylex.props(styles.input),
  };

  return (
    <div
      ref={_wrapper}
      className={clsx(styled.wrapper.className, wrapperClassName)}
      style={{
        ...styled.wrapper.style,
        ...props.style,
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
        className={clsx(styled.input.className, classNames[InputClassToken.Input])}
        style={styled.input.style}
        type={props.type}
        ref={_input}
        aria-invalid={props.invalid}
        readOnly={props.readOnly}
        onChange={inputEvents.change}
        onClick={inputEvents.click}
        {...focusProps}
      />

      {/* suffix */}
      {props.suffix}
    </div>
  );
});

export default Input;
