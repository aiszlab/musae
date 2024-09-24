import type { ReactNode } from "react";
import type { ComponentProps } from "musae/types/element";

/**
 * @description
 * item
 */
export type BreadcrumbItem = {
  /**
   * @description
   * item display label
   * @requires
   */
  label: ReactNode;

  /**
   * @description
   * item href link
   * if link is not provided, item will display as a label
   * @default void 0
   */
  href?: string;
};

/**
 * @description
 * breadcrumb props
 */
export type BreadcrumbProps = ComponentProps & {
  /**
   * @description
   * breadcrumb items
   * @default []
   */
  items?: BreadcrumbItem[];

  /**
   * @description
   * separator
   * @default "/"
   */
  separator?: Exclude<ReactNode, undefined | null>;
};

/**
 * @description
 * breadcrumb item props
 */
export type BreadcrumbItemProps = BreadcrumbItem & {
  /**
   * @description
   * max
   * @requires
   */
  max: boolean;

  /**
   * @description
   * separator
   * @requires
   */
  separator: Exclude<ReactNode, undefined | null>;
};
