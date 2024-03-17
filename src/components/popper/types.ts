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
   * 浮层出现之前的钩子函数，主要用于处理一些动画效果
   */
  onEntered?: () => Promise<void>;

  /**
   * @description
   * 浮层消失之前的钩子函数，主要用于处理一些动画效果
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
