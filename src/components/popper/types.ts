import type { Nullable } from "@aiszlab/relax/types";
import { Placement } from "@popperjs/core";
import type { DOMAttributes, ReactNode } from "react";
import { ComponentProps } from "../../types/element";

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
  children: ReactNode;

  /**
   * @description
   * if popper is open
   */
  open: boolean;

  /**
   * @description
   * trigger
   */
  trigger?: Nullable<Element>;

  /**
   * @description
   * placement
   */
  placement?: Placement;

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

export type DropdownProps = PopperProps & {};
