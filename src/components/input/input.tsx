import React, { forwardRef, useRef, useImperativeHandle, useContext, CSSProperties } from "react";
import { useInputEvents, useStyles, useWrapperEvents } from "./hooks";
import type { InputProps, InputRef } from "./types";
import { useBoolean, useControlledState } from "@aiszlab/relax";
import Context from "../config/context";
import { ComponentToken, InputClassToken } from "../../utils/class-name";
import { stylex } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  wrapper: (borderColor: Required<CSSProperties>["borderColor"]) => ({
    minHeight: 36,
    minWidth: 0,
    width: 240,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    cursor: "text",

    // border
    borderColor,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxsmall,
    paddingInline: spacing.medium,
  }),

  focused: (borderColor: Required<CSSProperties>["borderColor"]) => ({
    borderWidth: 2,
    borderColor,
  }),

  invalid: (borderColor: Required<CSSProperties>["borderColor"]) => ({
    borderColor,
  }),

  input: {
    backgroundColor: "transparent",
    minWidth: 0,
    outline: "none",
    border: "none",
    height: "auto",
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
  const [_value, _setValue] = useControlledState(props.value, {
    defaultState: "",
  });
  /// is focused
  const { isOn: isFocused, turnOn: _focus, turnOff: _blur } = useBoolean();
  /// style
  const { wrapper: wrapperClassName } = useStyles([props.className, isFocused, props.invalid]);

  /// events
  const inputEvents = useInputEvents([
    [_focus, _blur, _setValue],
    [props.onFocus, props.onBlur, props.onChange, props.onClick],
  ]);
  const wrapperEvents = useWrapperEvents([_input]);

  const styled = {
    wrapper: stylex.props(
      styles.wrapper(theme.colors[ColorToken.Outline]),
      isFocused && styles.focused(theme.colors[ColorToken.Primary]),
      props.invalid && styles.invalid(theme.colors[ColorToken.Error])
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
        onFocus={inputEvents.focus}
        onBlur={inputEvents.blur}
      />

      {/* suffix */}
      {props.suffix}
    </div>
  );
});

export default Input;
