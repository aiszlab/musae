import React, { useMemo, forwardRef, type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import { useStyles } from "./hooks";
import "../../styles/input.css";
import type { Props, Variant } from "./types";
import { useBoolean } from "@aiszlab/relax";

/**
 * @author murukal
 * @description input component
 */
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  // should input be wrapped
  const hasWrapper = useMemo(() => {
    return !!props.label || !!props.prefix || !!props.suffix;
  }, [props.label, props.prefix, props.suffix]);

  const { isOn: isFocused, turnOn: focus, turnOff: blur } = useBoolean();
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);
  const { input: inputClassName, wrapper: wrapperClassName } = useStyles([variant, isFocused, hasWrapper]);

  const inputProps = useMemo<
    Pick<
      DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
      "onFocus" | "onBlur" | "type" | "ref" | "className"
    >
  >(() => {
    return {
      onFocus: focus,
      onBlur: blur,
      type: props.type || "text",
      ref: ref,
      className: inputClassName,
    };
  }, [focus, blur, props.type, ref]);

  // for some props, this component must wrapped by div
  if (hasWrapper) {
    return (
      <div className={wrapperClassName} aria-label={props.label}>
        {!!props.prefix && <span className="musae-input-prefix">{props.prefix}</span>}
        <input {...inputProps} />
        {!!props.suffix && <span className="musae-input-suffix">{props.suffix}</span>}
      </div>
    );
  }

  return <input {...inputProps} />;
});

export default Input;
