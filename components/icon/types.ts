import { CSSProperties, FC, ReactNode, ReactPortal } from "react";

export type AsProps = Required<Omit<IconProps, "as">>;

/**
 * @description
 * icon props
 */
export interface IconProps {
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
}
