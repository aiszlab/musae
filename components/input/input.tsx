import React, { useMemo, forwardRef, useRef, useImperativeHandle } from "react";
import { useStyles } from "./hooks";
import type { InputRef, InputProps, UsedInputProps, Variant } from "./types";
import { useBoolean } from "@aiszlab/relax";
import { StyledWrapper, StyledInput, StyledLabel } from "./styled";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLFieldSetElement>(null);

  useImperativeHandle(ref, () => ({
    input: inputRef.current,
    wrapper: wrapperRef.current,
  }));

  /// is focused
  const { isOn: isFocused, turnOn: focus, turnOff: blur } = useBoolean();

  /// variant
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);

  /// style
  const { wrapperClassName } = useStyles([props.className]);

  /// used input props
  const inputProps = useMemo<UsedInputProps>(() => {
    return {
      onFocus: (event) => {
        focus();
        props.onFocus?.(event);
      },
      onBlur: (event) => {
        blur();
        props.onBlur?.(event);
      },
      type: props.type || "text",
      ref: inputRef,
      className: "musae-input",
    };
  }, [focus, blur, props.type, props.onFocus, props.onBlur]);

  /// render
  return (
    <StyledWrapper ref={wrapperRef} className={wrapperClassName} isFocused={isFocused}>
      {/* prefix */}
      {props.prefix}

      {/* label */}
      {!!props.label && (
        <StyledLabel isFocused={isFocused} className="musae-input-label">
          {props.label}
        </StyledLabel>
      )}

      {/* input */}
      <StyledInput {...inputProps} />

      {/* suffix */}
      {props.suffix}
    </StyledWrapper>
  );
});

export default Input;
