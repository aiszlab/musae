import { useMounted } from "@aiszlab/relax";
import { useFormContext } from "./context";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import type { FieldsValue, FormItemProps } from "../../utils/form";
import type { ContextValue } from "../../types/form";

type UsingFormItem<T extends FieldsValue, FieldKey extends keyof T> = Pick<
  FormItemProps<T, FieldKey>,
  "name" | "rules"
>;

function useFormItem<T extends FieldsValue, FieldKey extends keyof T>({
  name,
  rules,
}: UsingFormItem<T, FieldKey>) {
  const { form } = useFormContext() as ContextValue<T>;
  const [error, setError] = useState<ReactNode>();
  const [value, setValue] = useState<T[FieldKey]>();

  useMounted(() => {
    if (!name) return;

    return form?.register<FieldKey>(name, {
      rules,
      onChange: ({ error, value }) => {
        setError(error);
        setValue(value);
      },
    });
  });

  const isInvalid = useMemo(() => {
    return !!error;
  }, []);

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

export { useFormItem };
