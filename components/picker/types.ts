import type { ReactNode } from "react";
import { Partialable } from "../../types/lib";

/**
 * @description
 * picker props
 */
export interface PickerProps {
  /**
   * @description
   * picked
   */
  picked: ReactNode;

  /**
   * @description
   * pickable
   */
  pickable: ReactNode;

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

export interface ContextValue {
  isVisible: boolean;
}
