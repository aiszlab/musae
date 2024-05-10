import type { Nullable } from "@aiszlab/relax/types";
import type { PopperProps } from "../popper/types";
import type { ReactNode } from "react";

/**
 * @description
 * tour step
 */
export type TourStep = {
  /**
   * @description
   * title
   */
  title: ReactNode;

  /**
   * @description
   * description
   */
  description?: ReactNode;

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
   * overlay
   */
  overlay?: boolean;

  /**
   * @description
   * spotlight padding
   */
  spotlightPadding?: number | [number, number];
};

/**
 * @description
 * spotlight props
 */
export type SpotlightProps = {
  /**
   * @description
   * padding
   */
  padding: [number, number];

  /**
   * @description
   * trigger
   */
  trigger: PopperProps["trigger"];
};