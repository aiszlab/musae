import _Form from "./form";
import type { TypedForm } from "../../types/form";
import Item from "./item";
import { useForm } from "./use-form";
import List from "./list";
import { useWatch } from "./hooks/use-watch";
import { useFormContext } from "./context";

const Form: TypedForm = Object.assign(_Form, {
  Item,
  List,
  useForm,
  useWatch,
  useFormContext,
});

export { Form };
