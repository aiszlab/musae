import _Form from "./form";
import type { TypedForm } from "../../types/form";
import Item from "./item";
import { useForm } from "./use-form";
import List from "./list";

const Form: TypedForm = Object.assign(_Form, {
  Item,
  List,
  useForm,
});

export { Form };
