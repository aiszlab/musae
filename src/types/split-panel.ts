import type { MutableRefObject, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Nullable } from "@aiszlab/relax/types";

export type Orientation = "horizontal" | "vertical";

/**
 * @description panel item
 */
export interface PanelItem extends ComponentProps {
  /**
   * @description children
   */
  children?: ReactNode;

  /**
   * @description default size
   *
   * 0 mean "auto"
   * 1-100 mean `${defaultSize}%`
   *
   * @default 0
   */
  defaultSize?: number;
}

type UnsizedPanelItem = Omit<PanelItem, "defaultSize">;

/**
 * @description split panel props
 */
export interface SplitPanelProps extends ComponentProps {
  /**
   * @description items
   */
  items: [...PanelItem[], UnsizedPanelItem];

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
export interface PanelProps extends ComponentProps {
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

  /**
   * @description at index
   */
  at: number;
}

/**
 * @description context value
 */
export interface ContextValue {
  /**
   * @description orientation
   */
  orientation: Orientation;

  /**
   * @description panel refs
   */
  panelsRef?: MutableRefObject<Nullable<PanelRef>[]>;
}

/**
 * @description panel ref
 */
export interface PanelRef {
  /**
   * @description offset setter
   */
  offset: (offset: number) => void;

  /**
   * @description reset
   */
  reset: () => void;

  /**
   * @description size
   */
  size: () => number;
}

/**
 * @description divider props
 */
export interface DividerProps {
  /**
   * @description drag move handler
   */
  onDragMove: (offset: number) => void;

  /**
   * @description drag end handler
   */
  onDragEnd: () => void;
}
