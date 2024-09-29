import type { Value, ControlledValue, UploadedItem } from "musae/types/upload";

/**
 * @description
 * check current value is provided by user
 */
export const isControlled = (value: Value): value is ControlledValue => {
  return !value.key || !(value as UploadedItem).file;
};
