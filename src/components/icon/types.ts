import type { CSSProperties, FC, MouseEventHandler, ReactNode, ReactPortal } from "react";

export type AsProps = Required<Omit<IconProps, "as" | "onClick" | "className">>;

/**
 * @description
 * icon props
 */
export interface IconProps {
  /**
   * @description
   * class name
   */
  className?: string;

  /**
   * @description
   * as render
   */
  as?: Exclude<ReactNode, ReactPortal> | FC<AsProps>;

  /**
   * @description
   * size
   */
  size?: number;

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
}
