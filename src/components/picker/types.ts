import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * picker props
 */
export interface PickerProps extends ComponentProps {
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
   * popup width
   */
  popupWidth?: "match" | number | false;
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
