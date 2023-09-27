import _Radio from "./radio";
import RadioGroup from "./group";
import type { TypedRadio } from "./types";

export const Radio: TypedRadio = Object.assign(_Radio, {
  Group: RadioGroup,
});
