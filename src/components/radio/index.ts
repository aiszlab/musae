import _Radio from "./radio";
import Group from "./group";
import type { TypedRadio } from "../../types/radio";

export const Radio: TypedRadio = Object.assign(_Radio, {
  Group,
});
