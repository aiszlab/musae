import type { Dayjs } from "dayjs";
import type { Partialable } from "@aiszlab/relax/types";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * calendar props
 */
export type CalendarProps = ComponentProps & {
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
};
