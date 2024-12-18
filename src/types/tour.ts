import type { Nullable, Voidable } from "@aiszlab/relax/types";
import type { ReactNode } from "react";

/**
 * @description
 * tour step
 */
export type TourStep = {
  /**
   * @description
   * title
   * @requires
   */
  title: ReactNode;

  /**
   * @description
   * description
   * @default void 0
   */
  description?: ReactNode;

  /**
   * @description
   * target
   * @requires
   */
  target: Nullable<HTMLElement> | (() => Nullable<HTMLElement>);
};

/**
 * @description
 * tour props
 */
export type TourProps = {
  /**
   * @description
   * open
   * @default false
   */
  open?: boolean;

  /**
   * @description
   * steps
   * @default []
   */
  steps?: TourStep[];

  /**
   * @description
   * close handler
   * @default void 0
   */
  onClose?: () => void;

  /**
   * @description
   * overlay
   * @default true
   */
  overlay?: boolean;

  /**
   * @description
   * spotlight padding
   * @default 8
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
   * trigger element
   */
  trigger: Voidable<HTMLElement>;
};
