import type { ReactNode } from "react";

/**
 * @description
 * picker props
 */
export interface PickerProps {
  /**
   * @description
   * selection
   */
  selections: ReactNode;

  /**
   * @description
   * options
   */
  options: ReactNode;

  /**
   * @description
   * class name
   */
  className?: string
}

/**
 * @description
 * options render props
 */
export interface OptionsRenderProps {
  /**
   * @description
   * width
   */
  width?: number;
}

/**
 * @description
 * picker ref
 */
export interface PickerRef {
  /**
   * @description
   * close
   */
  close: () => void;
}
