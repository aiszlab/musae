import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { useClassNames, useInputEvents, useStyles, useWrapperEvents } from "./hooks";
import type { InputProps, InputRef } from "./types";
import { useBoolean, useControlledState } from "@aiszlab/relax";
import { StyledWrapper } from "./styled";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const _input = useRef<HTMLInputElement>(null);
  const _wrapper = useRef<HTMLDivElement>(null);
  const classNames = useClassNames();

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

  return (
    <StyledWrapper
      ref={_wrapper}
      className={wrapperClassName}
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
        className={classNames.input}
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
    </StyledWrapper>
  );
});

export default Input;
