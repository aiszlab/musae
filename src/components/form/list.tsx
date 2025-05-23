import React, { createElement, useMemo, useState } from "react";
import Item from "./item";
import Form from "./form";
import type { FieldsValue, FormListField, FormListProps } from "../../types/form";
import { useIdentity } from "@aiszlab/relax";
import { FormContext } from "./context";
import { useForm } from "./hooks";
import { FORM_TOKEN } from "../../utils/form";

function List<T extends FieldsValue, FieldKey extends keyof T>({
  children,
  ...itemProps
}: FormListProps<T, FieldKey>) {
  const { 1: _id } = useIdentity();
  const [fields, setFields] = useState<{ name: string }[]>([]);
  const _form = useForm<{}>();

  const add = () => {
    setFields((prev) => [...prev, { name: _id() }]);
  };

  const remove = (index: number) => {
    setFields((prev) => prev.filter((_, _index) => _index !== index));
  };

  const _fields = useMemo<Map<string, FormListField>>(() => {
    return fields.reduce((prev, field, index) => {
      return prev.set(field.name, { name: index });
    }, new Map());
  }, [fields, add, remove]);

  return (
    <Item {...itemProps}>
      <FormContext.Provider value={{ form: _form[FORM_TOKEN] }}>
        {createElement(children, {
          fields: Array.from(_fields.values()),
          add,
          remove,
        })}
      </FormContext.Provider>
    </Item>
  );
}

export default List;
