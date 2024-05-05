import type { Nullable } from "@aiszlab/relax/types";
import type { PopperProps } from "../popper/types";

/**
 * @description
 * tour step
 */
export type TourStep = {
  /**
   * @description
   * title
   */
  title: string;

  /**
   * @description
   * description
   */
  description: string;

  /**
   * @description
   * target
   */
  target: Nullable<Element> | (() => Nullable<Element>);
};

/**
 * @description
 * tour props
 */
export type TourProps = {
  /**
   * @description
   * open
   */
  open: boolean;

  /**
   * @description
   * steps
   */
  steps: TourStep[];

  /**
   * @description
   * close handler
   */
  onClose?: () => void;

  /**
   * @description
   * offset
   */
  offset?: PopperProps["offset"];

  /**
   * @description
   * overlay
   */
  overlay?: boolean;
};
