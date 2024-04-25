import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";
import type { Nullable } from "@aiszlab/relax/types";

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
   * popup width
   */
  popupWidth?: "match" | number | false;

  /**
   * @description
   * when trigger on popper entered
   */
  onPopperEntered?: () => void;

  /**
   * @description
   * when trigger on popper exited
   */
  onPopperExite?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper exited
   */
  onPopperExited?: () => Promise<void> | void;

  /**
   * @description
   * click handler
   */
  onClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * @description
   * pickable
   */
  pickable: ReactNode;

  /**
   * @description
   * pickable class name
   */
  pickableClassName?: string;

  /**
   * @description
   * pickable style
   */
  pickableStyle?: CSSProperties;
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

  /**
   * @description
   * why put `isVisible` into context
   *
   * answer:
   * in `Select` component, when `isVisible` is false, should keep the last state options
   */
  isVisible: boolean;
}
