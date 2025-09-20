import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

export type Layout = "side" | "top" | "mix";

export type Logo = {
  /**
   * @description url
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
   * @description logo
   */
  logo?: ReactNode | Logo;

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
   * @default []
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

  /**
   * @description
   * default expanded keys
   */
  defaultExpandedKeys?: string[];

  /**
   * @description
   * class names
   */
  classNames?: Partial<Record<"main", string>>;

  /**
   * @description
   * layout
   * @default "mix"
   */
  layout?: Layout;
};
