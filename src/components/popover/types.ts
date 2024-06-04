import type { DOMAttributes, ReactElement, ReactNode, RefAttributes } from "react";
import type { ComponentProps } from "../../types/element";

export type ChildProps<T> = Pick<
  DOMAttributes<T>,
  | "onPointerEnter"
  | "onMouseEnter"
  | "onMouseOver"
  | "onMouseLeave"
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
   */
  children: ReactElement<P>;

  /**
   * @description
   * title
   */
  title?: ReactNode;

  /**
   * @description
   * trigger by
   */
  triggerBy?: TriggerBy | TriggerBy[];
};
