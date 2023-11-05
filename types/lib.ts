/**
 * @description
 * require some fields
 */
export type RequiredIn<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;

/**
 * @description
 * partial able
 */
export type Partialable<T> = T | undefined;

/**
 * @description
 * null able
 */
export type Nullable<T> = T | null;
