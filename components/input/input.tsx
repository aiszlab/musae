import React, {
  useMemo,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  FocusEventHandler,
  ChangeEventHandler,
} from "react";
import { useStyles } from "./hooks";
import type { InputProps, InputRef, Variant } from "./types";
import { useBoolean, useControlledState } from "@aiszlab/relax";
import { StyledWrapper, StyledInput, StyledLabel } from "./styled";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const _ref = useRef<HTMLInputElement>(null);

  useImperativeHandle<InputRef, InputRef>(ref, () => {
    return _ref.current;
  });

  /// controlled value
  const [_value, _setValue] = useControlledState(props.value, {
    defaultState: "",
  });
  /// is focused
  const { isOn: isFocused, turnOn: _focus, turnOff: _blur } = useBoolean();
  /// variant
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);
  /// style
  const { wrapperClassName } = useStyles([props.className]);

  const focus = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _focus();
      props.onFocus?.(e);
    },
    [props.onFocus]
  );

  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _blur();
      props.onBlur?.(e);
    },
    [props.onBlur]
  );

  /// change handler
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      _setValue(e.target.value);
      props.onChange?.(e.target.value);
    },
    [props.onChange]
  );

  return (
    <StyledWrapper className={wrapperClassName} focused={isFocused} invalid={!!props.invalid}>
      {/* prefix */}
      {props.prefix}

      {/* label */}
      {!!props.label && (
        <StyledLabel focused={isFocused} className="musae-input-label">
          {props.label}
        </StyledLabel>
      )}

      {/* input */}
      <StyledInput
        name={props.name}
        value={_value}
        className="musae-input"
        type={props.type}
        ref={_ref}
        aria-invalid={props.invalid}
        onFocus={focus}
        onBlur={blur}
        onChange={change}
      />

      {/* suffix */}
      {props.suffix}
    </StyledWrapper>
  );
});

export default Input;
