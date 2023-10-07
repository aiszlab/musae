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
import type { InputProps, Variant } from "./types";
import { useBoolean } from "@aiszlab/relax";
import { StyledWrapper, StyledInput, StyledLabel } from "./styled";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<Partial<HTMLInputElement>, InputProps>((props, ref) => {
  const _ref = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      value: _ref.current!.value,
      name: _ref.current!.name,
      blur: _ref.current!.blur,
    } as Partial<HTMLInputElement>;
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
        value={props.value}
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
