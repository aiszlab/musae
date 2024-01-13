import { Dayjs } from "dayjs";
import { Partialable } from "@aiszlab/relax";

/**
 * @description
 * date range picker props
 */
export interface DateRangePickerProps {
  /**
   * @description
   * value
   */
  value?: [Partialable<Dayjs>, Partialable<Dayjs>];

  /**
   * @description
   * change handler
   */
  onChange?: (value: [Dayjs, Dayjs]) => void;
}
