import type { ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * breadcrumb props
 */
export interface BreadcrumbProps {
  /**
   * @description
   * breadcrumb items
   */
  items: BreadcrumbItemProps[];

  /**
   * @description
   * separator
   */
  separator?: ReactNode;
}

/**
 * @author murukal
 *
 * @description
 * item props
 */
export interface BreadcrumbItemProps {
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
}
