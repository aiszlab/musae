import { ReactNode } from "react";

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
   * children
   */
  children: ReactNode;
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
};

/**
 * @description
 * timeline item props
 */
export type TimelineItemProps = TimelineItem;
