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
}
