import { Dayjs } from "dayjs";

/**
 * @description
 * date picker props
 */
export interface DatePickerProps {
  /**
   * @description
   * value
   */
  value?: Dayjs;

  /**
   * @description
   * change handler
   */
  onChange?: (value: Dayjs) => void;
}
