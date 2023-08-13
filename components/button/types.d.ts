import type { MouseEventHandler, ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * button props
 */
export interface Props {
  children: ReactNode;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
