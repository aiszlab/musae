import { ComponentProps } from "./element";

/**
 * @description Ellipsis Props
 */
export interface EllipsisProps extends ComponentProps {
  /**
   * @description value
   *
   * @default ""
   */
  value?: string;

  /**
   * @description text overflow
   *
   * @default "..."
   */
  textOverflow?: string;

  /**
   * @description line clamp
   *
   * @default 1
   */
  lineClamp?: number;
}
