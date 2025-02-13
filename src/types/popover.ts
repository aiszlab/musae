import type { DOMAttributes, ReactElement, ReactNode, RefAttributes } from "react";
import type { ComponentProps } from "./element";
import type { Placement } from "@floating-ui/dom";
import type { PopperProps } from "./popper";

export type ChildProps<T> = Pick<
  DOMAttributes<T>,
  | "onMouseEnter"
  | "onMouseLeave"
  | "onPointerEnter"
  | "onPointerLeave"
  | "onClick"
  | "onContextMenu"
  | "onFocus"
  | "onBlur"
> &
  RefAttributes<T>;

export type TriggerBy = "hover" | "focus" | "click" | "contextMenu";

/**
 * @description
 * popover props
 */
export type PopoverProps<
  T extends HTMLElement = HTMLElement,
  P extends ChildProps<T> = ChildProps<T>,
> = ComponentProps & {
  /**
   * @description
   * a trigger element.
   * @requires
   */
  children: ReactElement<P> | Exclude<ReactNode, ReactElement | Iterable<ReactNode>> | string;

  /**
   * @description
   * title
   * @default void 0
   */
  title?: ReactNode;

  /**
   * @description
   * content
   * @requires
   */
  content: ReactNode;

  /**
   * @description
   * trigger by
   * @default "hover"
   */
  triggerBy?: TriggerBy | TriggerBy[];

  /**
   * @description
   * popover placement
   * @default "bottom"
   */
  placement?: Placement;

  /**
   * @description
   * padding
   * @default true
   */
  padding?: boolean | number;

  /**
   * @description
   * arrow
   * @default false
   */
  arrow?: boolean;

  /**
   * @description
   * offset
   */
  offset?: PopperProps["offset"];
};

/**
 * @description
 * popover ref
 *
 * if user want to handle popover's event, they can use this ref.
 * just like `close`
 */
export type PopoverRef = {
  /**
   * @description
   * close popover
   */
  close: () => Promise<void>;
};
