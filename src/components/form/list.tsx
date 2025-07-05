import React, { createContext, ReactNode, useContext, useMemo, useState } from "react";
import Item from "./item";
import type { FieldsValue, FormListProps } from "../../types/form";
import { useEvent, useIdentity, replaceAt, at } from "@aiszlab/relax";
import { FormContext } from "./context";
import { useForm } from "./hooks";
import { FORM_TOKEN } from "../../utils/form";

interface ContextValue<V extends FieldsValue> {
  onChange?: (field: string, value: V) => void;
  values?: V[];
  fields: string[];
}

/**
 * `List` Context
 */
const Context = createContext<ContextValue<{}>>({
  fields: [],
});

/**
 * internal `List`.`Item` Component
 */
function _Item({ field, children }: { field: string; children: ReactNode }) {
  const { onChange, values, fields } = useContext(Context);

  // current field form value
  const value = useMemo(() => {
    if (!values || values.length === 0) return void 0;
    return at(values, fields.indexOf(field));
  }, [values, fields, field]);

  // create form instance
  const _form = useForm<{}>({
    value,
    onChange: (_names, value) => {
      onChange?.(field, value);
    },
  });

  return (
    <FormContext.Provider value={{ form: _form[FORM_TOKEN] }}>{children}</FormContext.Provider>
  );
}

/**
 * internal used Component
 */
function _List<V extends FieldsValue>({
  values = [],
  onChange,
  children,
  fields,
}: {
  fields: string[];
  values?: V[];
  onChange?: (values: V[]) => void;
  children: ReactNode;
}) {
  const changeItemValue = (field: string, value: V) => {
    const _index = fields.indexOf(field);
    onChange?.(replaceAt(values, _index, value));
  };

  return (
    <Context.Provider
      value={{
        fields,
        values,
        // @ts-expect-error 合理的泛型设计，在实际使用中，表单属性会被扩充
        onChange: changeItemValue,
      }}
    >
      {children}
    </Context.Provider>
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
  const [_fields, setFields] = useState<Set<string>>(new Set());
  const fields = useMemo(() => Array.from(_fields), [_fields]);

  const add = useEvent(() => {
    setFields((prev) => new Set(prev).add(_id()));
  });

  const remove = useEvent((field: string) => {
    setFields((prev) => {
      const next = new Set(prev);
      next.delete(field);
      return next;
    });
  });

  // no render, return null
  if (!children) return null;

  return (
    <Item {...itemProps}>
      <_List fields={fields}>{children({ fields, add, remove })}</_List>
    </Item>
  );
}

List.Item = _Item;

export default List;
