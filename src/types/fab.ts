import type { ReactNode } from "react";
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
export type FabProps = {
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
