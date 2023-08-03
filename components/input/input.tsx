import React, { useMemo, forwardRef, useRef, useImperativeHandle } from "react";
import { useStyles } from "./hooks";
import "../../styles/input.css";
import type { InputRef, Props, UsedInputProps, Variant } from "./types";
import { useBoolean } from "@aiszlab/relax";
import Label from "./label";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<InputRef, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: inputRef.current?.focus,
    }),
    []
  );

  /// should input be wrapped
  const hasWrapper = useMemo(() => {
    return !!props.label || !!props.prefix || !!props.suffix;
  }, [props.label, props.prefix, props.suffix]);

  /// is focused
  const { isOn: isFocused, turnOn: focus, turnOff: blur } = useBoolean();

  /// variant
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);

  /// style
  const { inputClassName, wrapperClassName } = useStyles([variant, isFocused, hasWrapper]);

  /// used input props
  const inputProps = useMemo<UsedInputProps>(() => {
    return {
      onFocus: focus,
      onBlur: blur,
      type: props.type || "text",
      ref: inputRef,
      className: inputClassName,
    };
  }, [focus, blur, props.type, inputRef, inputClassName]);

  /// for some props, this component must wrapped by div
  if (hasWrapper) {
    return (
      <div className={wrapperClassName}>
        {/* prefix */}
        {!!props.prefix && <span className="musae-input-prefix">{props.prefix}</span>}

        {/* label */}
        {!!props.label && (
          <Label hasPlaceholder isFocused={isFocused} className="musae-input-label">
            {props.label}
          </Label>
        )}

        {/* input */}
        <input {...inputProps} />

        {/* suffix */}
        {!!props.suffix && <span className="musae-input-suffix">{props.suffix}</span>}
      </div>
    );
  }

  /// do not need any wrap, only display input component
  return <input {...inputProps} />;
});

export default Input;
