import type { ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * menu item props
 */
export interface ItemRenderProps {
  /* children */
  children: ReactNode;

  /* class name */
  className?: string;
}

/**
 * @author murukal
 *
 * @description
 * menu render props
 */
export interface MenuRenderProps {
  /* items */
  items: ItemRenderProps[];
}
