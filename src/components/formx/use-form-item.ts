import { useMounted } from "@aiszlab/relax";
import { ContextValue, useFormContext } from "./context";
import { FieldsValue, FormItemProps } from "./types";
import { type ReactNode, useMemo, useState } from "react";

function useFormItem<T extends FieldsValue, FieldValue>({
  name,
  rules,
}: FormItemProps<FieldValue>) {
  const { form } = useFormContext() as ContextValue<T>;
  const [error, setError] = useState<ReactNode>();

  useMounted(() => {
    return form?.registerField(name, {
      name,
      rules,
    });
  });

  const isError = useMemo(() => {
    return !!error;
  }, []);

  return {
    error,
    isError,
  };
}

export { useFormItem };
