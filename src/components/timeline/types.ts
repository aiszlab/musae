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
   */
  label?: ReactNode;

  /**
   * @description
   * description
   */
  description: ReactNode;
};

/**
 * @description
 * timeline props
 */
export type TimelineProps = {
  /**
   * @description
   * items
   */
  items: TimelineItem[];

  /**
   * @description
   * you can use `mode` to switch the direction of the timeline
   */
  mode?: Mode;
};

/**
 * @description
 * timeline item props
 */
export type TimelineItemProps = TimelineItem;

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
};
