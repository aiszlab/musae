import { Dayjs } from "dayjs";

type Mode = "single" | "range";

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
   * mode
   */
  mode?: Mode;

  /**
   * @description
   * focused at
   */
  focusedAt?: Dayjs;
}
