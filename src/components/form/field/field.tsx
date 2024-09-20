import React, { isValidElement, useMemo, cloneElement, ReactElement } from "react";
import type { FormItemProps } from "../types";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../../types/element";
import type { RequiredIn } from "@aiszlab/relax/types";
import { chain, isRefable, clsx } from "@aiszlab/relax";
import { FormClassToken } from "../../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import Layout from "./layout";
import Error from "./error";
import { AnimatePresence } from "framer-motion";
import { typography } from "../../theme/theme";
import { useClassNames } from "../../../hooks/use-class-names";
import { ComponentToken } from "../../../utils/component-token";

const styles = stylex.create({
  supporting: {
    minHeight: sizes.xsmall,
    paddingBlock: spacing.xxsmall,
  },
});

/**
 * @description
 * form item may not has name prop
 * if there is name prop, it will render
 */
const Field = ({
  required,
  children: _children,
  className,
  style,
  ...props
}: RequiredIn<FormItemProps, "name" | "required">) => {
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

  const children = useMemo(() => {
    const _isValidElement = isValidElement<FieldRenderProps>(_children);
    if (!_isValidElement) return _children;
    const _child = _children as ReactElement<FieldRenderProps>;

    /// rewrite change and blur handler
    const handlers: Pick<FieldRenderProps, "onChange" | "onBlur"> = {
      onChange: chain(_child.props.onChange, onChange),
      onBlur: chain(_child.props.onBlur, onBlur),
    };

    /// registe react hook form
    return cloneElement(_children as ReactElement<FieldRenderProps>, {
      name,
      value,
      ...handlers,
      invalid,
      ...(isRefable(_children) && {
        ref,
      }),
    });
  }, [_children, name, value, invalid, ref, onChange, onBlur]);

  const styled = {
    supporting: stylex.props(styles.supporting, typography.body.small),
  };

  return (
    <div className={clsx(classNames[FormClassToken.Item], className)} style={style}>
      <Layout label={props.label} required={required}>
        <div>{children}</div>

        <div
          className={clsx(classNames[FormClassToken.FieldSupporting], styled.supporting.className)}
          style={styled.supporting.style}
        >
          <AnimatePresence mode="wait">{invalid && <Error error={error} />}</AnimatePresence>
        </div>
      </Layout>
    </div>
  );
};

export default Field;
