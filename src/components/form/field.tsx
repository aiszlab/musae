import React, {
  isValidElement,
  useMemo,
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
  CSSProperties,
} from "react";
import { ContextValue, FormItemProps } from "./types";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../types/element";
import Context from "./context";
import { Grid } from "../grid";
import { RequiredIn, isRefable } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, FormClassToken } from "../../utils/class-name";
import { stylex } from "@stylexjs/stylex";
import { LABEL } from "../theme/theme";
import clsx from "clsx";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const { Row, Col } = Grid;

const styles = stylex.create({
  supportingText: {
    display: "flex",
    flexDirection: "column",
  },

  explain: {
    paddingInline: spacing.large,
    paddingTop: spacing.xxsmall,
    paddingBottom: spacing.none,
  },

  error: (color: CSSProperties["color"]) => ({
    color,
  }),
});

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
  const theme = useTheme();

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

  const styled = {
    supportingText: stylex.props(styles.supportingText),
    explain: stylex.props(styles.explain, !!error?.message && styles.error(theme.colors[ColorToken.Error])),
  };

  return (
    <div
      className={clsx(styled.supportingText.className, classNames[FormClassToken.Item])}
      style={styled.supportingText.style}
    >
      <Gridded label={props.label}>
        <div>{children}</div>

        <div>
          {!!error?.message && (
            <span
              className={clsx(styled.explain.className, classNames[FormClassToken.ItemExplainError])}
              style={styled.explain.style}
            >
              {error?.message}
            </span>
          )}
        </div>
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
          <span {...stylex.props(LABEL.small)}>{props.label}</span>
        </Col>
      )}

      {/* input */}
      <Col span={wrapperCol}>{props.children}</Col>
    </Row>
  );
};

export default Field;
