import React, { useMemo, forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import { useStyles } from "./hooks";
import "../../styles/input/index.css";
import type { InputRef, Props, UsedInputProps, Variant } from "./types";
import { useBoolean } from "@aiszlab/relax";
import Label from "./label";
import Wrapper from "./wrapper";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { isOn: isNotEmpty, turnOn, turnOff } = useBoolean();

  useEffect(() => {
    if (!!inputRef.current?.value) {
      turnOn();
    } else {
      turnOff();
    }
  }, [!!inputRef.current?.value]);

  useImperativeHandle(ref, () => ({
    focus: inputRef.current?.focus,
    inputRef: inputRef.current,
    wrapperRef: wrapperRef.current,
  }));

  /// is focused
  const { isOn: isFocused, turnOn: focus, turnOff: blur } = useBoolean();

  /// variant
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);

  /// style
  const { wrapperClassName } = useStyles([variant, isFocused]);

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
  }, [focus, blur, props.type, inputRef, props.onFocus, props.onBlur]);

  /// render
  return (
    <Wrapper
      ref={wrapperRef}
      className={wrapperClassName}
      isFocused={isFocused}
      hasLabel={!!props.label}
      isNotEmpty={isNotEmpty}
    >
      {/* prefix */}
      {!!props.prefix && <span className="musae-input-prefix">{props.prefix}</span>}

      {/* label */}
      {!!props.label && (
        <Label hasPlaceholder isFocused={isFocused} className="musae-input-label" isNotEmpty={isNotEmpty}>
          {props.label}
        </Label>
      )}

      {/* input */}
      <input {...inputProps} aria-controls="11111" role="combobox" />

      {/* suffix */}
      {!!props.suffix && <span className="musae-input-suffix">{props.suffix}</span>}
    </Wrapper>
  );
});

export default Input;
