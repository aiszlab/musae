import type { CSSProperties, FC, HTMLAttributes, MouseEventHandler, ReactNode, ReactPortal } from "react";
import { ComponentProps } from "../../types/element";

export type AsProps = Required<Pick<IconProps, "size">>;

type Size = "small" | "medium" | "large";

/**
 * @description
 * icon props
 */
export interface IconProps extends ComponentProps {
  /**
   * @description
   * as render
   */
  as?: Exclude<ReactNode, ReactPortal> | FC<AsProps>;

  /**
   * @description
   * size
   */
  size?: number | Size;

  /**
   * @description
   * color
   */
  color?: CSSProperties["fill"];

  /**
   * @description
   * click handler
   */
  onClick?: MouseEventHandler<HTMLSpanElement>;

  /**
   * @description
   * role
   */
  role?: HTMLAttributes<HTMLSpanElement>["role"];
}
