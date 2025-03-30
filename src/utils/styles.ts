import { toArray, exclude } from "@aiszlab/relax";

/**
 * @description
 * stylex props always return a class name like string
 * in some case, i usally need an array of class names
 */
export const toClassList = (className = "") => {
  return exclude(toArray(className, " "), [""] as const);
};

/**
 * @description add alias for stylex apis
 */
export {
  props as $props,
  create as $create,
  keyframes as $keyframes,
  attrs as $attrs,
} from "@stylexjs/stylex";
