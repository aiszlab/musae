import type { ReactNode } from "react";
import { Partialable } from "../../types/lib";

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
  className?: string;

  /**
   * @description
   * popup width
   */
  popupWidth?: "match" | number | false;
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
  widthGetter: () => Partialable<number>;
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
