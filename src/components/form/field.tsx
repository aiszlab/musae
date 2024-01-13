import React, { isValidElement, useMemo, cloneElement, ReactElement, ReactNode, useContext } from "react";
import { ContextValue, FormItemProps } from "./types";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../types/element";
import Context from "./context";
import { Grid } from "../grid";
import { StyledLabel, StyledSupportingText } from "./styled";
import { RequiredIn, isRefable } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, FormClassToken } from "../../utils/class-name";

const { Row, Col } = Grid;

/**
 * @description
 * form item may not has name prop
 * if there is name prop, it will render
 */
const Field = (props: RequiredIn<FormItemProps, "name">) => {
  const classNames = useClassNames(ComponentToken.Form);
  const {
    field: { onBlur, onChange, name, value, ref },
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
      ...(isRefable(props.children) && {
        ref,
      }),
    });
  }, [props.children, name, value, invalid, ref, onChange, onBlur]);

  return (
    <div className={classNames[FormClassToken.Item]}>
      <Gridded label={props.label}>
        <div>{children}</div>

        <StyledSupportingText>
          {!!error?.message && <span className={classNames[FormClassToken.ItemExplainError]}>{error?.message}</span>}
        </StyledSupportingText>
      </Gridded>
    </div>
  );
};

/**
 * @description
 * item grid
 */
export const Gridded = (props: {
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
