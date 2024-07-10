import type { ReactNode } from "react";
import type { PortalProps } from "../portal/types";

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
export type FloatingActionButtonProps = {
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
};

/**
 * @description
 * floatable props
 */
export type FloatableProps = {
  /**
   * @link {FloatingActionButtonProps.container}
   */
  container?: FloatingActionButtonProps["container"];

  /**
   * @description
   * children
   */
  children?: ReactNode;
};
