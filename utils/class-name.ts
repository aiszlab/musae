/**
 * @description
 * prefix
 */
export const PREFIX_MUSAE = "musae";

/**
 * @description
 * add prefix
 */
export const withPrefix = (prefix: string, className: string) => {
  return `${prefix}-${className}`;
};
