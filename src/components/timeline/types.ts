import { ReactNode } from "react";

type Mode = "left" | "right" | "alternate";

/**
 * @description
 * timeline item type
 */
export type TimelineItem = {
  /**
   * @description
   * label
   * @default void 0
   */
  label?: ReactNode;

  /**
   * @description
   * description
   * @requires
   */
  description: ReactNode;

  /**
   * @description
   * dot render slot
   * @default void 0
   */
  dot?: ReactNode;
};

/**
 * @description
 * timeline props
 */
export type TimelineProps = {
  /**
   * @description
   * items
   * @requires
   */
  items: TimelineItem[];

  /**
   * @description
   * you can use `mode` to switch the direction of the timeline
   * @default "right"
   */
  mode?: Mode;

  /**
   * @description
   * size
   */
  size?: number;
};

/**
 * @description
 * timeline item props
 */
export type TimelineItemProps = TimelineItem & {
  /**
   * @description
   * value
   */
  value: number;
};

/**
 * @description
 * context value
 */
export type ContextValue = {
  /**
   * @description
   * you can use `mode` to switch the direction of the timeline
   */
  mode: Mode;

  /**
   * @description
   * max
   */
  max: number;

  /**
   * @description
   * size
   */
  size?: number;
};
