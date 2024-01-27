import React, { isValidElement, useMemo, cloneElement, ReactElement, type CSSProperties } from "react";
import type { FormItemProps } from "./types";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../types/element";
import { RequiredIn, isRefable } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, FormClassToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import Gridded from "./gridded";
import { BODY } from "../theme/theme";

const styles = stylex.create({
  explain: {
    paddingInline: spacing.large,
    paddingBlock: spacing.xxxsmall,
    marginBottom: `calc(${spacing.xlarge} * -1)`,
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
const Field = ({ required, ...props }: RequiredIn<FormItemProps, "name" | "required">) => {
  const classNames = useClassNames(ComponentToken.Form);
  const {
    field: { onBlur, onChange, name, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    rules: {
      required: {
        value: required,
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
    explain: stylex.props(BODY.medium, styles.explain),
  };

  const _error = useMemo(() => {
    if (!invalid) return null;

    const { className, style } = stylex.props(styles.error(theme.colors[ColorToken.Error]));

    return (
      <span className={clsx(classNames[FormClassToken.ItemExplainError], className)} style={style}>
        {error?.message}
      </span>
    );
  }, [classNames, error?.message, invalid, theme.colors]);

  return (
    <div className={clsx(classNames[FormClassToken.Item])}>
      <Gridded label={props.label} required={required}>
        <div>{children}</div>

        {/* explain */}
        {_error && (
          <div
            className={clsx(classNames[FormClassToken.ItemExplain], styled.explain.className)}
            style={styled.explain.style}
          >
            {_error}
          </div>
        )}
      </Gridded>
    </div>
  );
};

export default Field;
