import React, {
  createContext,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import Item from "./item";
import type { FieldsValue, FormListProps, UsingForm } from "../../types/form";
import { useEvent, useIdentity, replaceAt, at } from "@aiszlab/relax";
import { FormContext } from "./context";
import { useForm } from "./hooks";
import { FORM_TOKEN } from "../../utils/form";

interface ContextValue<V extends FieldsValue> {
  onChange?: (field: string, value: V) => void;
  values?: V[];
  fields: string[];
}

interface ListRef {
  remove: (field: string) => void;
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

  // value change handler
  const changeFieldValue = useCallback<Required<UsingForm<FieldsValue>>["onChange"]>(
    (_names, value) => {
      onChange?.(field, value);
    },
    [field],
  );

  // create form instance
  const _form = useForm<FieldsValue>({
    value,
    onChange: changeFieldValue,
  });

  return (
    <FormContext.Provider value={{ form: _form[FORM_TOKEN] }}>{children}</FormContext.Provider>
  );
}

/**
 * internal used Component
 */
const _List = forwardRef<
  ListRef,
  {
    fields: string[];
    values?: FieldsValue[];
    onChange?: (values: FieldsValue[]) => void;
    children: ReactNode;
  }
>(function ({ values = [], onChange, children, fields }, ref) {
  const changeItemValue = (field: string, value: FieldsValue) => {
    const _at = fields.indexOf(field);
    onChange?.(replaceAt(values, _at, value));
  };

  useImperativeHandle(ref, () => {
    return {
      remove: (field: string) => {
        const _at = fields.indexOf(field);
        onChange?.(values.toSpliced(_at, 1));
      },
    };
  });

  return (
    <Context.Provider
      value={{
        fields,
        values,
        onChange: changeItemValue,
      }}
    >
      {children}
    </Context.Provider>
  );
});

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
      <_List ref={listRef} fields={fields}>
        {children({ fields, add, remove })}
      </_List>
    </Item>
  );
}

List.Item = _Item;

export default List;
