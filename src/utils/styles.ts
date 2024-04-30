/**
 * @description
 * stylex props always return a class name like string
 * in some case, i usally need an array of class names
 */
export const toClassList = (className: string = "") => {
  return className.split(" ").filter((className) => !!className);
};
