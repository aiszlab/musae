import type { ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Closable } from "../hooks/use-closable";

export interface BottomSheetProps extends ComponentProps {
  /**
   * @description
   * Controls open/close state of the bottom sheet.
   */
  open: boolean;

  /**
   * @description
   * Called when the sheet requests to close (overlay click, Esc key).
   */
  onClose: VoidFunction;

  /**
   * @description
   * Sheet content rendered below the drag handle.
   */
  children?: ReactNode;

  /**
   * @description
   * Height of the sheet panel. Accepts any CSS height value.
   * @default "50vh"
   */
  height?: number | string;

  /**
   * @description
   * Whether the sheet can be closed by overlay click or Esc key.
   * Pass an array of `Closable` values to enable specific close triggers.
   * @default true (all triggers enabled)
   */
  closable?: boolean | Closable[];
}
