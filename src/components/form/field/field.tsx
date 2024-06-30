import React, { isValidElement, useMemo, cloneElement, ReactElement, type CSSProperties } from "react";
import type { FormItemProps } from "../types";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "../../../types/element";
import type { RequiredIn } from "@aiszlab/relax/types";
import { chain, isRefable } from "@aiszlab/relax";
import { ComponentToken, FormClassToken } from "../../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";
import Layout from "./layout";
import Error from "./error";
import { AnimatePresence } from "framer-motion";
import { typography } from "../../theme/theme";
import { useClassNames } from "../../../hooks/use-class-names";

const styles = stylex.create({
  error: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
    overflow: "hidden",
  }),

  supporting: {
    minHeight: sizes.xsmall,
    paddingBottom: spacing.xxsmall,
  },
});

/**
 * @description
 * form item may not has name prop
 * if there is name prop, it will render
 */
const Field = ({ required, children: _children, ...props }: RequiredIn<FormItemProps, "name" | "required">) => {
  const classNames = useClassNames(ComponentToken.Form);
  const theme = useTheme();
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
    error: stylex.props(
      styles.error({
        color: theme.colors[ColorToken.Error],
      })
    ),
    supporting: stylex.props(styles.supporting, typography.body.small),
  };

  return (
    <div className={clsx(classNames[FormClassToken.Item])}>
      <Layout label={props.label} required={required}>
        <div>{children}</div>

        <div
          className={clsx(classNames[FormClassToken.FieldSupporting], styled.supporting.className)}
          style={styled.supporting.style}
        >
          <AnimatePresence>
            {invalid && <Error error={error} className={styled.error.className} style={styled.error.style} />}
          </AnimatePresence>
        </div>
      </Layout>
    </div>
  );
};

export default Field;
