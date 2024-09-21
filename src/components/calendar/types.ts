import type { Dayjs } from "dayjs";
import type { Partialable } from "@aiszlab/relax/types";
import { ComponentProps } from "musae/types/element";

/**
 * @description
 * calendar props
 */
export type CalendarProps = ComponentProps & {
  /**
   * @description
   * value
   * @default void 0
   */
  value?: Dayjs | [Partialable<Dayjs>, Partialable<Dayjs>];

  /**
   * @description
   * focused at
   * @default void 0
   */
  focusedAt?: Dayjs;

  /**
   * @description
   * click date handler
   * @default void 0
   */
  onClick?: (value: Dayjs) => void;
};
