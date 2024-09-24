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
   * @default void 0
   */
  value?: [Partialable<Dayjs>, Partialable<Dayjs>];

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: [Dayjs, Dayjs]) => void;
}
