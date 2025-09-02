import { useState } from "react";
import { FORM_TOKEN, type FieldsValue } from "../../../utils/form";
import { useFormContext } from "../context";
import { useMounted } from "@aiszlab/relax";
import type { UsedForm } from "../../../types/form";

/**
 * @description watch form item
 */
export const useWatch = <T extends FieldsValue, FieldKey extends keyof T>(
  name: FieldKey,
  usedForm?: UsedForm<T>,
) => {
  const [value, setValue] = useState<T[FieldKey]>();
  const { form } = useFormContext<T>();

  useMounted(() => {
    if (!name) return;

    const unregister = (usedForm?.[FORM_TOKEN] ?? form)?.watch(name, (_changedValue) => {
      setValue(_changedValue);
    });

    return () => {
      unregister?.();
    };
  });

  return value;
};
