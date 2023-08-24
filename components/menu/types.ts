import type { Key, ReactNode } from "react";

export interface WithLevel {
  /* level */
  level: number;
}

/**
 * @author murukal
 *
 * @description
 * menu props
 */
export interface MenuProps {
  /* items */
  items: MenuItemProps[];
}

/**
 * @author murukal
 *
 * @description
 * menu item props
 */
export interface MenuItemProps {
  /* key */
  key: Key;

  /* title */
  label?: string;

  /* prefix node */
  prefix?: ReactNode;

  /* children */
  children?: MenuItemProps[];
}

/**
 * @author murukal
 *
 * @description
 * menu group render props
 */
export type MenuGroupRenderProps = MenuProps & WithLevel & { isCollapsed: boolean };

/**
 * @author murukal
 *
 * @description
 * menu item render props
 */
export type MenuItemRenderProps = Omit<MenuItemProps, "key"> & WithLevel;
