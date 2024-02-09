import type { CSSProperties, FC, MouseEventHandler, ReactNode, ReactPortal } from "react";
import { ComponentProps } from "../../types/element";

export type AsProps = Required<Pick<IconProps, "size">>;

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
