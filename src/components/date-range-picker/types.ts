import type { Dayjs } from "dayjs";
import type { Partialable } from "@aiszlab/relax/types";

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
