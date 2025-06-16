import { useEvent, useMounted, useUpdateEffect } from "@aiszlab/relax";
import { useFormContext } from "./context";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import { FORM_TOKEN, type FieldsValue } from "../../utils/form";
import type { FormItemProps, UsingForm as _UsingForm } from "../../types/form";
import { useForm as _useForm } from "./use-form";

type UsingFormItem<T extends FieldsValue, FieldKey extends keyof T> = Pick<
  FormItemProps<T, FieldKey>,
  "name" | "rules"
>;

type UsingForm<T extends FieldsValue> = _UsingForm<T> & {
  value?: Partial<T>;
};

function useFormItem<T extends FieldsValue, FieldKey extends keyof T>({
  name,
  rules,
}: UsingFormItem<T, FieldKey>) {
  const { form } = useFormContext<T>();
  const [error, setError] = useState<ReactNode>();
  const [value, setValue] = useState<T[FieldKey]>();

  const _rules = useEvent(() => {
    return rules;
  });

  useMounted(() => {
    if (!name) return;

    const unregister = form?.register<FieldKey>(name, {
      rules: _rules,
      onChange: ({ error, value }) => {
        setError(error);
        setValue(value);
      },
      onValidate: (error) => {
        setError(error);
      },
    });

    return () => {
      unregister?.();
    };
  });

  const isInvalid = useMemo(() => {
    return !!error;
  }, [error]);

  const change = useCallback((value: T[FieldKey]) => {
    if (!name) return;
    form?.change(name, value);
  }, []);

  return {
    value,
    error,
    isInvalid,
    change,
  };
}

/**
 * hook for `Form` used internal
 */
function useForm<T extends FieldsValue>({ value, ...usingForm }: UsingForm<T> = {}) {
  const form = _useForm<T>(usingForm);

  useUpdateEffect(() => {
    form[FORM_TOKEN].useValue(value);
  }, [value]);

  return form;
}

/**
 * @description watch form item
 */
const useWatch = <T extends FieldsValue, FieldKey extends keyof T>(name: FieldKey) => {
  const [value, setValue] = useState<T[FieldKey]>();
  const { form } = useFormContext<T>();

  useMounted(() => {
    if (!name) return;

    const unregister = form?.watch(name, (_changedValue) => {
      setValue(_changedValue);
    });

    return () => {
      unregister?.();
    };
  });

  return value;
};

export { useFormItem, useForm, useWatch };
