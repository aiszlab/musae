import { useMounted } from "@aiszlab/relax";
import { useFormContext } from "./context";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import type { FieldsValue, FormItemProps } from "../../utils/form";
import type { ContextValue } from "../../types/form";

function useFormItem<T extends FieldsValue, FieldValue>({
  name,
  rules,
}: FormItemProps<FieldValue>) {
  const { form } = useFormContext() as ContextValue<T>;
  const [error, setError] = useState<ReactNode>();
  const [value, setValue] = useState<FieldValue>();

  useMounted(() => {
    return form?.register<FieldValue>(name, {
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

  const change = useCallback(() => {}, []);

  return {
    value,
    error,
    isInvalid,
    change,
  };
}

export { useFormItem };
