import { useUpdateEffect } from "@aiszlab/relax";
import type { UsingForm } from "../../../types/form";
import { FORM_TOKEN, type FieldsValue } from "../../../utils/form";
import { useForm as _useForm } from "../use-form";

/**
 * hook for `Form` used internal
 */
function useForm<T extends FieldsValue>({ value, ...usingForm }: UsingForm<T> = {}) {
  const form = _useForm<T>({ value, ...usingForm });

  useUpdateEffect(() => {
    console.log("value=====updated=====", value);
    form[FORM_TOKEN].setFieldsValue(value ?? {});
  }, [value, form]);

  return form;
}

export { useForm };
