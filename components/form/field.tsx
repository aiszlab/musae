import React, { isValidElement, useMemo, cloneElement, ReactElement, ReactNode, useContext } from "react";
import { ContextValue, FormItemProps } from "./types";
import { RequiredIn } from "../../types/lib";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../types/element";
import Context from "./context";
import { Grid } from "../grid";
import { StyledLabel, StyledSupportingText } from "./styled";

const { Row, Col } = Grid;

/**
 * @description
 * form item may not has name prop
 * if there is name prop, it will render
 */
const Field = (props: RequiredIn<FormItemProps, "name">) => {
  const {
    field: { onBlur, onChange, name, value },
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    rules: {
      required: {
        value: !!props.required,
        message: `${props.name} is required`,
      },
    },
  });

  const children = useMemo(() => {
    const _isValidElement = isValidElement<FieldRenderProps>(props.children);
    if (!_isValidElement) return props.children;
    const _child = props.children as ReactElement<FieldRenderProps>;

    /// rewrite change and blur handler
    const handlers: Pick<FieldRenderProps, "onChange" | "onBlur"> = {
      onChange: (...args) => {
        _child.props.onChange?.(...args);
        onChange(...args);
      },
      onBlur: (...args) => {
        _child.props.onBlur?.(...args);
        onBlur();
      },
    };

    /// registe react hook form
    return cloneElement(props.children as ReactElement<FieldRenderProps>, {
      name,
      value,
      ...handlers,
      invalid,
    });
  }, [props.children, onChange, onBlur, invalid, name, value]);

  return (
    <div className="musae-form-item">
      <_Grid label={props.label}>
        <div>{children}</div>

        <StyledSupportingText>
          {!!error?.message && <span className="musae-form-item-explain-error">{error?.message}</span>}
        </StyledSupportingText>
      </_Grid>
    </div>
  );
};

/**
 * @description
 * item grid
 */
export const _Grid = (props: {
  children: ReactNode;
  label?: string;
  labelCol?: ContextValue["labelCol"];
  wrapperCol?: ContextValue["wrapperCol"];
}) => {
  const contextValue = useContext(Context);
  const labelCol = props.labelCol ?? contextValue.labelCol;
  const wrapperCol = props.wrapperCol ?? contextValue.wrapperCol;

  return (
    <Row gutter={[0, 8]}>
      {/* label */}
      {!!labelCol && props.label && (
        <Col span={labelCol}>
          <StyledLabel>{props.label}</StyledLabel>
        </Col>
      )}

      {/* input */}
      <Col span={wrapperCol}>{props.children}</Col>
    </Row>
  );
};

export default Field;
