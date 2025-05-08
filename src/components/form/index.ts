import _Form from "./form";
import type { TypedForm, FieldsValue } from "../../types/form";
import Item from "./item";
import { useForm } from "./use-form";

const Form: TypedForm = Object.assign(_Form, {
  Item,
  useForm,
});

export { Form, useForm, Item };
