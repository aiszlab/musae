import React, { useMemo, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import { useStyles } from "./hooks";
import type { InputRef, Props, UsedInputProps, Variant } from "./types";
import { useBoolean } from "@aiszlab/relax";
import Label from "./label";
import Wrapper from "./wrapper";
import StyledInput from "./styled-input";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, Props>((props, ref) => {
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
  const { wrapperClassName } = useStyles([variant, isFocused, props.className]);

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
    <Wrapper ref={wrapperRef} className={wrapperClassName} isFocused={isFocused}>
      {/* prefix */}
      {props.prefix}

      {/* label */}
      {!!props.label && (
        <Label isFocused={isFocused} className="musae-input-label">
          {props.label}
        </Label>
      )}

      {/* input */}
      <StyledInput {...inputProps} />

      {/* suffix */}
      {props.suffix}
    </Wrapper>
  );
});

export default Input;
