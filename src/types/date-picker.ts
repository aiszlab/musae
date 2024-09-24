import type { Dayjs } from "dayjs";

/**
 * @description
 * date picker props
 */
export interface DatePickerProps {
  /**
   * @description
   * value
   * @default void 0
   */
  value?: Dayjs;

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: Dayjs) => void;
}
