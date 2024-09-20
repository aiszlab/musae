import type { Key, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";
import type { ElevationToken } from "../theme/tokens.stylex";

export type Layout = "side" | "top" | "mix";

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

  /**
   * @description
   * default expanded keys
   */
  defaultExpandedKeys?: Key[];

  /**
   * @description
   * class names
   */
  classNames?: Partial<Record<"main", string>>;

  // TODO: add to docs
  /**
   * @description
   * elevation
   */
  elevation?: ElevationToken;

  // TODO: add to docs
  /**
   * @description
   * layout
   * @default "top-side"
   */
  layout?: Layout;
};
