import React, { isValidElement, useMemo, cloneElement, Children, type ReactNode } from "react";
import type { FormItemProps, FieldRenderProps } from "musae/types/form";
import { useController } from "react-hook-form";
import type { RequiredIn } from "@aiszlab/relax/types";
import { chain, isRefable, clsx, toFunction } from "@aiszlab/relax";
import { FormClassToken } from "../../../utils/class-name";
import Layout from "./layout";
import Error from "./error";
import { AnimatePresence } from "framer-motion";
import { useClassNames } from "../../../hooks/use-class-names";
import { useLocale } from "../../../locale";
import Support from "./support";

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
  support,
  ...props
}: RequiredIn<FormItemProps, "name" | "required">) => {
  const classNames = useClassNames("form");
  const [locale] = useLocale("form");

  const {
    field: { onBlur, onChange, name, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    rules: {
      required: {
        value: required,
        message: toFunction(locale.required)(props.label ?? props.name),
      },
    },
  });

  const children = useMemo(() => {
    return Children.toArray(_children)
      .reduce<[ReactNode[], boolean]>(
        ([_clonedChildren, isBound], _child) => {
          if (isBound || !isValidElement<FieldRenderProps>(_child)) {
            return [_clonedChildren.concat(_child), isBound] as const;
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
      )
      .at(0);
  }, [_children, name, value, invalid, ref, onChange, onBlur]);

  return (
    <Layout
      label={props.label}
      required={required}
      className={classNames[FormClassToken.Item]}
      supporting={
        <>
          {!!support && <Support>{support}</Support>}
          <AnimatePresence mode="wait">{invalid && <Error error={error} />}</AnimatePresence>
        </>
      }
    >
      <div className={clsx(classNames[FormClassToken.Field], className)} style={style}>
        {children}
      </div>
    </Layout>
  );
};

export default Field;
