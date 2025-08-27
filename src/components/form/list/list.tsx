import React, { useMemo } from "react";
import { type FieldsValue } from "../../../utils/form";
import { replaceAt, useEvent } from "@aiszlab/relax";
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
  const fields = useMemo(() => value.map((_, field) => field), [value]);

  const changeItemValue = useEvent((field: number, _value: FieldsValue) => {
    onChange?.(replaceAt(value, field, _value));
  });

  const remove = (field: number) => {
    onChange?.(value.toSpliced(field, 1));
  };

  const add = (field: number = -1) => {
    const _nextValues = [...value];

    if (field < 0) {
      _nextValues.push({});
    } else {
      _nextValues.splice(field + 1, 0, {});
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
