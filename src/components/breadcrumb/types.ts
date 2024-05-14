import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * item
 */
export type BreadcrumbItem = {
  /**
   * @description
   * item display label
   */
  label: ReactNode;

  /**
   * @description
   * item href link
   * if link is not provided, item will display as a label
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
   */
  items: BreadcrumbItem[];

  /**
   * @description
   * separator
   */
  separator?: ReactNode;
};

/**
 * @description
 * breadcrumb item props
 */
export type BreadcrumbItemProps = BreadcrumbItem & {
  /**
   * @description
   * max
   */
  max: boolean;

  /**
   * @description
   * separator
   */
  separator?: ReactNode;
};
