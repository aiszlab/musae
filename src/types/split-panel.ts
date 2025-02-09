import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

export type Orientation = "horizontal" | "vertical";

/**
 * @description panel item
 */
export interface PanelItem {
  /**
   * @description children
   */
  children?: ReactNode;

  /**
   * @description default size
   *
   * 0 mean "auto"
   *
   * @default 0
   */
  defaultSize?: number;

  /**
   * @description default size unit
   * @default '%'
   */
  defaultSizeUnit?: "px" | "%";
}

/**
 * @description split panel props
 */
export interface SplitPanelProps extends ComponentProps {
  /**
   * @description items
   */
  items: [...PanelItem[], Omit<PanelItem, "defaultSize">];

  /**
   * @description
   * orientation
   * @default "horizontal"
   */
  orientation?: Orientation;
}

/**
 * @description panel props
 */
export interface PanelProps {
  /**
   * @description children
   */
  children: ReactNode;

  /**
   * @description last
   */
  last: boolean;

  /**
   * @description default size
   */
  defaultSize?: string;
}

/**
 * @description context value
 */
export interface ContextValue {
  /**
   * @description orientation
   */
  orientation: Orientation;
}
