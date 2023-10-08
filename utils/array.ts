/**
 * @description
 * is array
 */
export const isArray = <T>(value: T | T[] | readonly T[]): value is T[] => {
  return Array.isArray(value);
};
