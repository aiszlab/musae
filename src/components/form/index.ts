import _Form from "./form";
import Item from "./item";
import type { FieldValues, UseFormReturn } from "react-hook-form";
import { useForm } from "./hooks";
import type { TypedForm } from "./types";

export const Form = Object.assign(_Form, {
  Item,
  useForm,
}) as TypedForm;

type FormRef<T extends FieldValues = FieldValues> = UseFormReturn<T>;

export { FormRef };
