import _Form from "./form";
import Item from "./item";
import type { TypedForm } from "./types";

export const Form: TypedForm = Object.assign(_Form, {
  Item,
});
