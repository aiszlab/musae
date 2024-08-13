import { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

export type Logo = {
  /**
   * @description
   * url
   */
  url: string;
};

export type NavigationItem = {
  /**
   * @description
   * path
   */
  path: string;

  /**
   * @description
   * label
   * @default void 0
   */
  label: ReactNode;

  /**
   * @description
   * children
   */
  children?: NavigationItem[];
};

/**
 * @description
 * workbench props
 */
export type BenchProps = ComponentProps & {
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

  /**
   * @description
   * navigations
   */
  navigations?: NavigationItem[];

  /**
   * @description
   * trailing
   */
  trailing?: ReactNode;

  /**
   * @description
   * navigate handler
   */
  onNavigate?: (path: string) => void;

  /**
   * @description
   * location
   */
  location?: string;
};
