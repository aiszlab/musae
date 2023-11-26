import { Dayjs } from "dayjs";
import { Partialable } from "../../types/lib";

/**
 * @description
 * calendar props
 */
export interface CalendarProps {
  /**
   * @description
   * value
   */
  value?: Dayjs | [Partialable<Dayjs>, Partialable<Dayjs>];

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
