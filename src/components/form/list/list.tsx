import React, { useMemo } from "react";
import { type FieldsValue } from "../../../utils/form";
import { isUndefined, replaceAt, useEvent, useIdentity } from "@aiszlab/relax";
import { Context } from "./context";
import type { FormListProps } from "../../../types/form";
import type { RequiredTo } from "@aiszlab/relax/types";

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
  const fields = useMemo(() => value.map(() => _id()), [value]);

  const changeItemValue = useEvent((field: number, _value: FieldsValue) => {
    onChange?.(replaceAt(value, field, _value));
  });

  const remove = (field: string) => {
    onChange?.(value.toSpliced(fields.indexOf(field), 1));
  };

  const add = (field?: string) => {
    const _nextValues = [...value];
    const _at = isUndefined(field) ? -1 : fields.indexOf(field);

    if (_at < 0) {
      _nextValues.push({});
    } else {
      _nextValues.splice(_at + 1, 0, {});
    }

    onChange?.(_nextValues);
  };

  return (
    <Context.Provider
      value={{
        values: value,
        onChange: changeItemValue,
      }}
    >
      {children({ fields, add, remove })}
    </Context.Provider>
  );
};

export { List };
