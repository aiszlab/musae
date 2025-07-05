import React, {
  createContext,
  forwardRef,
  type ReactNode,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import Item from "./item";
import type {
  FieldsValue,
  FormListItemProps,
  FormListProps,
  TypedFormList,
  UsingForm,
} from "../../types/form";
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
function _Item({ field, children }: FormListItemProps) {
  const { onChange, values, fields } = useContext(Context);

  // current field form value
  const value = useMemo(() => {
    if (!values || values.length === 0) return void 0;
    return at(values, fields.indexOf(field));
  }, [values, fields, field]);

  // value change handler
  const changeFieldValue = useEvent((_names, value) => {
    onChange?.(field, value);
  });

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
    value?: FieldsValue[];
    onChange?: (values: FieldsValue[]) => void;
    children: ReactNode;
  }
>(function ({ value = [], onChange, children, fields }, ref) {
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

const TypedList: TypedFormList = Object.assign(List, {
  Item: _Item,
});

export default TypedList;
