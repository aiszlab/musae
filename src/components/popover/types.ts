import type { DOMAttributes, ReactElement, ReactNode, RefAttributes } from "react";
import type { ComponentProps } from "../../types/element";
import type { Placement } from "@floating-ui/dom";

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

type TriggerBy = "hover" | "focus" | "click" | "contextMenu";

/**
 * @description
 * popover props
 */
export type PopoverProps<P extends ChildProps<T>, T extends HTMLElement> = ComponentProps & {
  /**
   * @description
   * a trigger element.
   * @requires
   */
  children: ReactElement<P>;

  /**
   * @description
   * title
   * @default void 0
   */
  title?: ReactNode;

  /**
   * @description
   * description
   * @requires
   */
  description: ReactNode;

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
};
