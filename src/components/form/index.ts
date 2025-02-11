import _Form from "./form";
import Item from "./item";
import { useForm } from "./hooks";
import type { TypedForm } from "../../types/form";

export const Form = Object.assign(_Form, {
  Item,
  useForm,
}) as TypedForm;
