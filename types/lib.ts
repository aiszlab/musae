/**
 * @description
 * require some fields
 */
export type RequiredIn<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
