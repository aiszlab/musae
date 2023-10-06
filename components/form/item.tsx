import { Children, DOMAttributes, cloneElement, isValidElement, ForwardedRef, FC, ExoticComponent } from "react";
import { FormItemProps } from "./types";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { RegistedElementProps } from "../../types/element";

const Item = (props: FormItemProps) => {
  let _isRegisted = false;
  const { getFieldState, formState, register } = useFormContext();

  const _props = register(props.name!);
  const { error, invalid } = getFieldState(props.name!, formState);

  return (
    <div>
      {Children.map(props.children, (child) => {
        if (_isRegisted) return child;

        if (!isValidElement<RegistedElementProps>(child)) {
          return child;
        }

        _isRegisted = true;

        const _change: typeof child.props.onChange = (e) => {
          child.props.onChange?.(e);
          _props?.onChange(e);
        };

        const _blur: typeof child.props.onBlur = (e) => {
          child.props.onBlur?.(e);
          _props?.onBlur(e);
        };

        const isRefable =
          (child.type as ExoticComponent)["$$typeof"]?.toString() === Symbol("react.forward_ref").toString();

        return cloneElement(child, {
          name: _props.name,
          onChange: _change,
          onBlur: _blur,
          invalid: invalid || void 0,
          // ...(isRefable && {
          //   ref: _props.ref,
          // }),
        });
      })}

      {!!error?.message && <span>{error.message}</span>}
    </div>
  );
};

export default Item;
