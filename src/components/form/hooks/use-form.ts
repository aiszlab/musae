import { isUndefined, useUpdateEffect } from "@aiszlab/relax";
import type { UsingForm } from "../../../types/form";
import { type FieldsValue } from "../../../utils/form";
import { useForm as _useForm } from "../use-form";

/**
 * hook for `Form` used internal
 */
function useForm<T extends FieldsValue>({ value, form: _form, ...usingForm }: UsingForm<T> = {}) {
  const form = _useForm<T>({ value, form: _form, ...usingForm });

  useUpdateEffect(() => {
    if (isUndefined(value)) {
      return;
    }

    form.setFieldsValue(value);
  }, [value, form]);

  return form;
}

export { useForm };
