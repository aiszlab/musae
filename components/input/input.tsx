import React, { forwardRef, useRef, useImperativeHandle, useContext } from "react";
import { useClassNames, useEvents, useStyles } from "./hooks";
import type { InputProps, InputRef } from "./types";
import { useBoolean, useControlledState } from "@aiszlab/relax";
import { StyledWrapper } from "./styled";
import Context from "./context";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const _input = useRef<HTMLInputElement>(null);
  const _wrapper = useRef<HTMLDivElement>(null);
  const classNames = useClassNames();
  const contextValue = useContext(Context);

  useImperativeHandle<InputRef, InputRef>(
    ref,
    () => {
      return {
        focus: _input.current?.focus,
        getBoundingClientRect: () => _wrapper.current!.getBoundingClientRect(),
      };
    },
    []
  );

  /// controlled value
  const [_value, _setValue] = useControlledState(props.value, {
    defaultState: "",
  });
  /// is focused
  const { isOn: isFocused, turnOn: _focus, turnOff: _blur } = useBoolean();
  /// style
  const { wrapperClassName } = useStyles([props.className, isFocused, props.invalid]);

  /// events
  const { focus, blur, change, click } = useEvents([
    [_focus, _blur, _setValue],
    [props.onFocus, props.onBlur, props.onChange, props.onClick],
  ]);

  const input = (
    <input
      name={props.name}
      value={_value}
      className={classNames.input}
      type={props.type}
      ref={_input}
      aria-invalid={props.invalid}
      onFocus={focus}
      onBlur={blur}
      onChange={change}
      // readOnly
      onClick={click}
    />
  );

  return (
    <StyledWrapper ref={_wrapper} className={wrapperClassName} focused={isFocused} invalid={!!props.invalid}>
      {/* prefix */}
      {props.prefix}

      {/* input */}
      {contextValue.selection ? (
        <span className={classNames.selection}>
          {contextValue.selection}
          {input}
        </span>
      ) : (
        input
      )}

      {/* suffix */}
      {props.suffix}
    </StyledWrapper>
  );
});

export default Input;
