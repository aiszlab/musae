import _Image from "./image";
import type { TypedImage } from "musae/types/image";
import Group from "./preview/group";

const Image = Object.assign(_Image, {
  Group,
}) satisfies TypedImage;

export { Image };
