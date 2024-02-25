import type { Nullable } from "@aiszlab/relax/types";
import { Placement } from "@popperjs/core";
import type { DOMAttributes, ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * popper props
 */
export interface PopperProps
  extends Pick<DOMAttributes<HTMLDivElement>, "onMouseDown" | "onPointerEnter" | "onPointerLeave"> {
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
   * class name
   */
  className?: string;

  /**
   * @description
   * placement
   */
  placement?: Placement;
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
