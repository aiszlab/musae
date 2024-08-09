import { ReactNode } from "react";

export interface Logo {
  /**
   * @description
   * url
   */
  url: string;
}

/**
 * @description
 * workbench props
 */
export type WorkbenchProps = {
  /**
   * @description
   * logo
   */
  logo?: string | Logo;

  /**
   * @description
   * title
   */
  title?: ReactNode;

  /**
   * @description
   * children
   */
  children?: ReactNode;
};
