import _Avatar from "./avatar";
import Group from "./group";
import type { TypedAvatar } from "./types";

const Avatar: TypedAvatar = Object.assign(_Avatar, {
  Group,
});

export { Avatar };
