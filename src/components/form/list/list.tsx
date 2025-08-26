import React, { forwardRef, useImperativeHandle, type ReactNode } from "react";
import { type FieldsValue } from "../../../utils/form";
import { replaceAt, useEvent } from "@aiszlab/relax";
import { Context } from "./context";

export interface ListRef {
  remove: (field: string) => void;
}

/**
 * internal used Component
 */
const List = forwardRef<
  ListRef,
  {
    fields: string[];
    value?: FieldsValue[];
    onChange?: (values: FieldsValue[]) => void;
    children: ReactNode;
  }
>(({ value = [], onChange, children, fields }, ref) => {
  const changeItemValue = useEvent((field: string, _value: FieldsValue) => {
    const _at = fields.indexOf(field);
    onChange?.(replaceAt(value, _at, _value));
  });

  useImperativeHandle(ref, () => {
    return {
      remove: (field: string) => {
        const _at = fields.indexOf(field);
        onChange?.(value.toSpliced(_at, 1));
      },
    };
  });

  return (
    <Context.Provider
      value={{
        fields,
        values: value,
        onChange: changeItemValue,
      }}
    >
      {children}
    </Context.Provider>
  );
});

export { List };
