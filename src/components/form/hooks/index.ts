import { useEvent, useMounted } from "@aiszlab/relax";
import { useFormContext } from "../context";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import { type FieldsValue } from "../../../utils/form";
import type { FormItemProps } from "../../../types/form";

type UsingFormItem<T extends FieldsValue, FieldKey extends keyof T> = Pick<
  FormItemProps<T, FieldKey>,
  "name" | "rules" | "required"
>;

function useFormItem<T extends FieldsValue, FieldKey extends keyof T>({
  name,
  rules = [],
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

  const change = useCallback(
    (value: T[FieldKey]) => {
      if (!name) return;
      form?.change(name, value);
    },
    [form, name],
  );

  return {
    value,
    error,
    isInvalid,
    change,
  };
}

export { useFormItem };
