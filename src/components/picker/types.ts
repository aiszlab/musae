import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";
import { Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * picker props
 */
export interface PickerProps extends ComponentProps {
  /**
   * @description
   * children
   */
  children: ReactNode | ((props: { isFocused: boolean }) => ReactNode);

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

  /**
   * @description
   * when trigger on popper entered
   */
  onPopperEntered?: Partialable<() => void>;
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
  /**
   * @description
   * if true, dropdown is visible
   */
  isVisible: boolean;
}
