import { useDefault, useEvent } from "@aiszlab/relax";
import { type FieldsValue, Form, FORM_TOKEN } from "../../utils/form";
import type { UsedForm, UsingForm } from "../../types/form";

/**
 * form hook
 * @description used for user external `Form` Component
 */
function useForm<T extends FieldsValue>({
  defaultValue,
  form: _usedForm,
  onChange,
}: UsingForm<T> = {}): UsedForm<T> {
  // value change handler
  const changeValue = useEvent((changedValue: Partial<T>, value: Partial<T>) => {
    onChange?.(changedValue, value);
  });

  const form = useDefault(() => {
    const _form = _usedForm?.[FORM_TOKEN] ?? new Form<T>({ onChange: changeValue });

    // set default value
    _form.setDefaultValue(defaultValue);

    return {
      setFieldValue(name: PropertyKey, value: unknown) {
        return _form.setFieldValue(name, value);
      },
      setFieldsValue(value: Partial<T>) {
        return _form.setFieldsValue(value);
      },
      reset() {
        return _form.reset();
      },
      clear() {
        return _form.clear();
      },
      getFieldsValue() {
        return _form.getFieldsValue();
      },
      validate() {
        return _form.validate();
      },
      [FORM_TOKEN]: _form,
    };
  });

  return form;
}

export { useForm };
