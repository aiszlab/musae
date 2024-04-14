import { useForm as _useForm, type UseFormReturn, type FieldValues } from "react-hook-form";

/**
 * @description
 * form hook api
 */
export const useForm = <T extends FieldValues>(usedForm?: UseFormReturn<T>) => {
  const form = _useForm<T>({
    mode: "all",
  });

  return usedForm ?? form;
};
