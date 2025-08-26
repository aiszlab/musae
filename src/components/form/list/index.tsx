import { useEvent, useIdentity } from "@aiszlab/relax";
import { type TypedFormList, type FormListProps } from "../../../types/form";
import { type FieldsValue } from "../../../utils/form";
import React, { useMemo, useRef, useState } from "react";
import { List, type ListRef } from "./list";
import Item from "../item";
import { Item as ListItem } from "./item";

/**
 * wrapped `Form.List` Component
 */
function _List<T extends FieldsValue, FieldKey extends keyof T>({
  children,
  ...itemProps
}: FormListProps<T, FieldKey>) {
  const { 1: _id } = useIdentity();
  const [_fields, setFields] = useState<Set<string>>(new Set());
  const fields = useMemo(() => Array.from(_fields), [_fields]);
  const listRef = useRef<ListRef>(null);

  const add = useEvent(() => {
    setFields((prev) => new Set(prev).add(_id()));
  });

  const remove = useEvent((field: string) => {
    setFields((prev) => {
      const next = new Set(prev);
      next.delete(field);
      return next;
    });
    listRef.current?.remove(field);
  });

  // no render, return null
  if (!children) return null;

  return (
    <Item {...itemProps}>
      <List ref={listRef} fields={fields}>
        {children({ fields, add, remove })}
      </List>
    </Item>
  );
}

const TypedList: TypedFormList = Object.assign(_List, {
  Item: ListItem,
});

export default TypedList;
