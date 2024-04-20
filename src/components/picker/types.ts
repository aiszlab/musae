import type { MouseEventHandler, ReactNode } from "react";
import { ComponentProps } from "../../types/element";
import { Nullable, Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * picker props
 */
export interface PickerProps extends ComponentProps {
  /**
   * @description
   * children
   */
  children: ReactNode;

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

  /**
   * @description
   * click handler
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
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

/**
 * @description
 * picker context value
 * provide picker state for custom render
 *
 * like in searchable select, if picker is focused, should show search input
 */
export interface ContextValue {
  /**
   * @description
   * why put `open` into context
   *
   * answer:
   * in select case,
   * if select is searchable, when typing search key,
   * should show dropdown
   */
  open: Nullable<() => void>;

  /**
   * @description
   * why put `isFocused` into context
   *
   * answer:
   * in select
   */
  isFocused: boolean;
}
