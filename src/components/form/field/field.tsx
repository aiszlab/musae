import React, { isValidElement, useMemo, cloneElement, Children, ReactNode } from "react";
import type { FormItemProps } from "musae/types/form";
import { useController } from "react-hook-form";
import { FieldRenderProps } from "musae/types/element";
import type { RequiredIn } from "@aiszlab/relax/types";
import { chain, isRefable, clsx } from "@aiszlab/relax";
import { FormClassToken } from "../../../utils/class-name";
import stylex from "@stylexjs/stylex";
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
    return Children.toArray(_children).reduce<[ReactNode[], boolean]>(
      ([_clonedChildren, isBound], _child) => {
        if (isBound || !isValidElement<FieldRenderProps>(_child)) {
          return [_clonedChildren.concat(_child), isBound];
        }

        // registe react hook form
        return [
          _clonedChildren.concat(
            cloneElement<FieldRenderProps>(_child, {
              name,
              value,
              invalid,
              onChange: chain(_child.props.onChange, onChange),
              onBlur: chain(_child.props.onBlur, onBlur),
              ...(isRefable(_child) && {
                ref,
              }),
            }),
          ),
          true,
        ];
      },
      [[], false],
    );
  }, [_children, name, value, invalid, ref, onChange, onBlur]);

  const styled = {
    supporting: stylex.props(styles.supporting, typography.body.small),
  };

  return (
    <Layout label={props.label} required={required} className={classNames[FormClassToken.Item]}>
      <div className={className} style={style}>
        {children}
      </div>

      <div
        className={clsx(classNames[FormClassToken.FieldSupporting], styled.supporting.className)}
        style={styled.supporting.style}
      >
        <AnimatePresence mode="wait">{invalid && <Error error={error} />}</AnimatePresence>
      </div>
    </Layout>
  );
};

export default Field;
