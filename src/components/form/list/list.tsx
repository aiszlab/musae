import React from "react";
import { type FieldsValue } from "../../../utils/form";
import { isUndefined, replaceAt, useEvent, useIdentity } from "@aiszlab/relax";
import { Context } from "./context";
import type { FormListProps } from "../../../types/form";
import type { RequiredTo } from "@aiszlab/relax/types";
import { useMemorized } from "@aiszlab/relax";
import { Fields } from "./fields";
import { Item } from "./item";

/**
 * internal used Component
 */
const List = ({
  value = [],
  onChange,
  children,
}: {
  value?: FieldsValue[];
  onChange?: (values: FieldsValue[]) => void;
  children: RequiredTo<FormListProps<FieldsValue, keyof FieldsValue>["children"]>;
}) => {
  const { 1: _id } = useIdentity();

  const _fields = useMemorized<Fields>(
    (prev) => {
      const _ref = prev ?? new Fields(_id);
      _ref.values = value;
      return _ref;
    },
    [value],
  );

  const changeItemValue = useEvent((field: string, _value: FieldsValue) => {
    onChange?.(replaceAt(value, _fields.indexOf(field), _value));
  });

  const remove = (field: string) => {
    onChange?.(value.toSpliced(_fields.remove(field), 1));
  };

  const add = (field?: string) => {
    onChange?.(value.toSpliced(_fields.add(field), 0, {}));
  };

  return (
    <Context.Provider
      value={{
        values: value,
        onChange: changeItemValue,
      }}
    >
      {children({ fields: _fields.fields, add, remove })}
    </Context.Provider>
  );
};

export { List };
