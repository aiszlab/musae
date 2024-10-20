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

export type Contribution = {
  /**
   * @description
   * contributedAt
   */
  contributedAt: Dayjs;

  /**
   * @description
   * count
   */
  count: number;
};

/**
 * @description
 * contribution calendar props
 */
export type ContributionCalendarProps = {
  /**
   * @description
   * year
   */
  year: number;

  /**
   * @description
   * contributions
   */
  contributions?: Contribution[];

  /**
   * @description
   * gap
   * @default 5
   */
  gap?: number;

  /**
   * @description
   * levels
   * @default 5
   */
  levels?: number;
};
