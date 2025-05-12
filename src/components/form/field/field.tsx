import React, { isValidElement, useMemo, cloneElement, Children, type ReactNode } from "react";
import type { FieldsValue, FormItemProps } from "../../../types/form";
import type { RequiredIn } from "@aiszlab/relax/types";
import { chain } from "@aiszlab/relax";
import Layout from "./layout";
import Error from "./error";
import { AnimatePresence } from "motion/react";
import { useLocale } from "../../../locale";
import Supporting from "./supporting";
import { stringify } from "@aiszlab/relax/class-name";
import { useFormContext } from "../context";
import { useFormItem } from "../use-form-item";

interface FieldProps<T> {
  name: PropertyKey;
  value: T;
  invalid?: boolean;
  onChange?: (value: T) => void;
  onBlur?: () => void;
}

/**
 * @description
 * form item may not has name prop
 * if there is name prop, it will render
 */
const Field = <T extends FieldsValue, FieldKey extends keyof T>({
  required,
  children: _children,
  className,
  style,
  supporting,
  name,
  rules,
  ...props
}: RequiredIn<FormItemProps<T, FieldKey>, "name" | "required">) => {
  const { classNames } = useFormContext();
  const { isInvalid, value, change, error } = useFormItem<T, FieldKey>({
    name,
    rules,
  });

  const children = useMemo(() => {
    return Children.toArray(_children)
      .reduce<[ReactNode[], boolean]>(
        ([_clonedChildren, isBound], _child) => {
          if (isBound || !isValidElement<FieldProps<T[FieldKey]>>(_child)) {
            return [_clonedChildren.concat(_child), isBound] as const;
          }

          // registe react hook form
          return [
            _clonedChildren.concat(
              cloneElement(_child, {
                name,
                value,
                invalid: isInvalid,
                onChange: chain(_child.props.onChange, change),
                onBlur: chain(_child.props.onBlur),
              }),
            ),
            true,
          ];
        },
        [[], false],
      )
      .at(0);
  }, [_children, name, value, isInvalid, change]);

  return (
    <Layout
      label={props.label}
      required={required}
      className={classNames.item}
      supporting={
        <>
          {!!supporting && <Supporting>{supporting}</Supporting>}
          <AnimatePresence mode="wait">{isInvalid && <Error children={error} />}</AnimatePresence>
        </>
      }
    >
      <div className={stringify(classNames.field, className)} style={style}>
        {children}
      </div>
    </Layout>
  );
};

export default Field;
