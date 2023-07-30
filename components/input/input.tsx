import React, { useMemo, forwardRef, type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import { useClassNames } from "./hooks";
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
    return !!props.label;
  }, [props.label]);

  const { isOn: isFocused, turnOn: focus, turnOff: blur } = useBoolean();
  const variant = useMemo<Variant>(() => props.variant || "outlined", [props.variant]);
  const { input: inputClassName, wrapper: wrapperClassName } = useClassNames([variant, isFocused, hasWrapper]);

  const inputProps = useMemo<
    Pick<
      DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
      "onFocus" | "onBlur" | "type" | "ref"
    >
  >(() => {
    return {
      onFocus: focus,
      onBlur: blur,
      type: props.type || "text",
      ref: ref,
    };
  }, [focus, blur, props.type, ref]);

  // for some props, this component must wrapped by div
  if (hasWrapper) {
    return (
      <div className={wrapperClassName} aria-label={props.label}>
        <input {...inputProps} />
      </div>
    );
  }

  return <input className={inputClassName} {...inputProps} />;
});

export default Input;
