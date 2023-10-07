import React, { isValidElement, useMemo, cloneElement, ReactElement } from "react";
import { FormItemProps } from "./types";
import { RequiredIn } from "../../types/lib";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../types/element";

/**
 * @description
 * form item may not has name prop
 * if there is name prop, it will render
 */
const Field = (props: RequiredIn<FormItemProps, "name">) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
  });

  const children = useMemo(() => {
    const _isValidElement = !isValidElement<FieldRenderProps>(props.children);
    if (!_isValidElement) return props.children;
    const _child = props.children as ReactElement<FieldRenderProps>;

    /// rewrite change and blur handler
    const handlers: Pick<FieldRenderProps, "onChange" | "onBlur"> = {
      onChange: (...args) => {
        _child.props.onChange?.(...args);
        field.onChange(...args);
      },
      onBlur: (...args) => {
        _child.props.onBlur?.(...args);
        field.onBlur();
      },
    };

    /// registe react hook form
    return cloneElement(props.children as ReactElement<FieldRenderProps>, {
      ...field,
      ...handlers,
      invalid,
    });
  }, [props.children, field, invalid]);

  return (
    <div>
      {children}
      {!!error?.message && <span>{error.message}</span>}
    </div>
  );
};

export default Field;
