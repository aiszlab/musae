import React, { createElement, useMemo, useState } from "react";
import Item from "./item";
import Form from "./form";
import type { FieldsValue, FormListField, FormListProps } from "../../types/form";
import { useIdentity } from "@aiszlab/relax";

function List<T extends FieldsValue, FieldKey extends keyof T>({
  children,
  ...itemProps
}: FormListProps<T, FieldKey>) {
  const { 1: _id } = useIdentity();
  const [fields, setFields] = useState<{ name: string }[]>([]);

  const add = () => {
    setFields((prev) => [...prev, { name: _id() }]);
  };

  const remove = () => {};

  const _fields = useMemo<Map<string, FormListField>>(() => {
    return fields.reduce((prev, field, index) => {
      return prev.set(field.name, { name: index });
    }, new Map());
  }, [fields, add, remove]);

  return (
    <Item {...itemProps}>
      <Form>
        {createElement(children, {
          fields: Array.from(_fields.values()),
          add,
          remove,
        })}
      </Form>
    </Item>
  );
}

export default List;
