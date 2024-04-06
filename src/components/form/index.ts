import _Form from "./form";
import Item from "./item";
import type { TypedForm, FormRef } from "./types";

export const Form: TypedForm = Object.assign(_Form, {
  Item,
});

export { FormRef };
