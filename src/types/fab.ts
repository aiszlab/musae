import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { PortalProps } from "./portal";
import type { ButtonProps } from "./button";

/**
 * @description
 * floatable ref
 */
export type FloatableRef = {
  /**
   * @description
   * get rect
   */
  getBoundingClientRect: () => DOMRect | undefined;
};

/**
 * @description
 * props
 */
export type FabProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onPointerEnter" | "onPointerLeave" | "onMouseEnter" | "onMouseLeave"
> & {
  /**
   * @description
   * container
   */
  container?: PortalProps["container"];

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * click handler
   * @default void 0
   */
  onClick?: ButtonProps["onClick"];

  /**
   * @description
   * draggable
   * @default true
   */
  draggable?: boolean;
};

/**
 * @description
 * floatable props
 */
export type FloatableProps = {
  /**
   * @link {FabProps.container}
   */
  container?: FabProps["container"];

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @link {FabProps.onClick}
   */
  onClick?: FabProps["onClick"];
};
