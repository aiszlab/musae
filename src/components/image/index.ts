import _Image from "./image";
import type { TypedImage } from "./types";
import Group from "./preview/group";

const Image = Object.assign(_Image, {
  Group,
}) satisfies TypedImage;

export { Image };
