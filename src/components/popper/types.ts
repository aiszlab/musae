import type { Nullable } from "@aiszlab/relax/types";
import type { DOMAttributes, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";
import type { Placement } from "@floating-ui/dom";

/**
 * @author murukal
 *
 * @description
 * popper props
 */
export interface PopperProps
  extends Pick<DOMAttributes<HTMLDivElement>, "onMouseDown" | "onPointerEnter" | "onPointerLeave">,
    ComponentProps {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * if popper is open
   */
  open: boolean;

  /**
   * @description
   * trigger
   */
  trigger?: Nullable<Element> | (() => Nullable<Element>);

  /**
   * @description
   * placement
   */
  placement?: Placement;

  /**
   * @description
   * offset
   */
  offset?: number | [number, number];

  /**
   * @description
   * when trigger on popper entered, this function will be called
   */
  onEntered?: () => Promise<void>;

  /**
   * @description
   * when trigger on popper exiting, this function will be called
   */
  onExit?: () => Promise<void>;

  /**
   * @description
   * when trigger on popper exited, this function will be called
   */
  onExited?: () => Promise<void>;

  /**
   * @description
   * if current popper is escape from current dom tree, we use `Portal` Component
   */
  portal?: boolean;
}

/**
 * @description
 * popper ref
 */
export interface PopperRef {
  /**
   * @description
   * update
   */
  update?: VoidFunction;
}

export type DropdownProps = Omit<PopperProps, "portal">;
