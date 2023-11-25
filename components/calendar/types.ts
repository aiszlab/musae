import { Dayjs } from "dayjs";

/**
 * @description
 * calendar props
 */
export interface CalendarProps {
  /**
   * @description
   * value
   */
  value?: Dayjs | [Dayjs, Dayjs];

  /**
   * @description
   * focused at
   */
  focusedAt?: Dayjs;

  /**
   * @description
   * click date handler
   */
  onClick?: (value: Dayjs) => void;
}
