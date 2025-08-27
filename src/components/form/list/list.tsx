import React, { useMemo } from "react";
import { type FieldsValue } from "../../../utils/form";
import { replaceAt, useEvent } from "@aiszlab/relax";
import { Context } from "./context";
import type { FormListProps } from "../../../types/form";
import type { RequiredTo } from "@aiszlab/relax/types";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * internal used Component
 */
const List = ({
  value = [],
  onChange,
  children,
}: {
  value?: Partialable<FieldsValue>[];
  onChange?: (values: Partialable<FieldsValue>[]) => void;
  children: RequiredTo<FormListProps<FieldsValue, keyof FieldsValue>["children"]>;
}) => {
  const fields = useMemo(() => value.map((_, field) => field), [value]);

  const changeItemValue = useEvent((field: number, _value: FieldsValue) => {
    onChange?.(replaceAt(value, field, _value));
  });

  const remove = (field: number) => {
    onChange?.(value.toSpliced(field, 1));
  };

  const add = (field?: number) => {
    onChange?.(value.toSpliced(field ?? -1, 0, void 0));
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
