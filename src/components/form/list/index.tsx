import { type TypedFormList, type FormListProps } from "../../../types/form";
import { type FieldsValue } from "../../../utils/form";
import React from "react";
import { List } from "./list";
import Item from "../item";
import { Item as ListItem } from "./item";

/**
 * wrapped `Form.List` Component
 */
function _List<T extends FieldsValue, FieldKey extends keyof T>({
  children,
  ...itemProps
}: FormListProps<T, FieldKey>) {
  // no render, return null
  if (!children) return null;

  return (
    <Item {...itemProps}>
      <List children={children} />
    </Item>
  );
}

const TypedList: TypedFormList = Object.assign(_List, {
  Item: ListItem,
});

export default TypedList;
