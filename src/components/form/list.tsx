import React, { createElement, ReactNode, useMemo, useState } from "react";
import Item from "./item";
import type { FieldsValue, FormListField, FormListProps } from "../../types/form";
import { useEvent, useIdentity } from "@aiszlab/relax";
import { FormContext, useFormContext } from "./context";
import { useForm } from "./hooks";
import { ChangeHandler, FORM_TOKEN } from "../../utils/form";

/**
 * internal used Component
 */
function _List<V extends FieldsValue>({
  value,
  onChange,
  children,
}: {
  value?: V;
  onChange?: ChangeHandler<V>;
  children: ReactNode;
}) {
  const _form = useForm<{}>({
    value,
    onChange,
  });

  return (
    <FormContext.Provider value={{ form: _form[FORM_TOKEN] }}>{children}</FormContext.Provider>
  );
}

/**
 * wrapped `Form.List` Component
 */
function List<T extends FieldsValue, FieldKey extends keyof T>({
  children,
  ...itemProps
}: FormListProps<T, FieldKey>) {
  const { 1: _id } = useIdentity();
  const [fields, setFields] = useState<{ name: string }[]>([]);

  const add = useEvent(() => {
    setFields((prev) => [...prev, { name: _id() }]);
  });

  const remove = useEvent((index: number) => {
    setFields((prev) => prev.filter((_, _index) => _index !== index));
  });

  const _fields = useMemo<Map<string, FormListField>>(() => {
    return fields.reduce((prev, field, index) => {
      return prev.set(field.name, { name: index });
    }, new Map());
  }, [fields, add, remove]);

  // null render, return null
  if (!children) return null;

  return (
    <Item {...itemProps}>
      <_List>{children({ fields: Array.from(_fields.values()), add, remove })}</_List>
    </Item>
  );
}

export default List;
