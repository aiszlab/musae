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

  const { isOn: isNotEmpty, turnOn, turnOff } = useBoolean();

  useEffect(() => {
    if (!!inputRef.current?.value) {
      turnOn();
    } else {
      turnOff();
    }
  }, [!!inputRef.current?.value]);

  useImperativeHandle(
    ref,
    () => ({
      focus: inputRef.current?.focus,
    }),
    []
  );

  /// is focused
  const { isOn: isFocused, turnOn: focus, turnOff: blur } = useBoolean();

  /// variant
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);

  /// style
  const { wrapperClassName } = useStyles([variant, isFocused]);

  /// used input props
  const inputProps = useMemo<UsedInputProps>(() => {
    return {
      onFocus: focus,
      onBlur: blur,
      type: props.type || "text",
      ref: inputRef,
      className: "musae-input",
    };
  }, [focus, blur, props.type, inputRef]);

  /// render
  return (
    <Wrapper className={wrapperClassName} isFocused={isFocused} hasLabel={!!props.label} isNotEmpty={isNotEmpty}>
      {/* prefix */}
      {!!props.prefix && <span className="musae-input-prefix">{props.prefix}</span>}

      {/* label */}
      {!!props.label && (
        <Label hasPlaceholder isFocused={isFocused} className="musae-input-label" isNotEmpty={isNotEmpty}>
          {props.label}
        </Label>
      )}

      {/* input */}
      <input {...inputProps} />

      {/* suffix */}
      {!!props.suffix && <span className="musae-input-suffix">{props.suffix}</span>}
    </Wrapper>
  );
});

export default Input;
