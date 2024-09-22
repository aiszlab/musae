import { useForm as _useForm, type FieldValues } from "react-hook-form";
import type { UsedForm } from "musae/types/form";

/**
 * @description
 * form hook api
 */
export const useForm = <T extends FieldValues>(usedForm?: UsedForm<T>): UsedForm<T> => {
  const form = _useForm<T>({
    mode: "all",
  });

  return usedForm ?? form;
};
