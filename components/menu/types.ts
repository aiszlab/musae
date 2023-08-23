import type { Key } from "react";

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
}

/**
 * @author murukal
 *
 * @description
 * menu group render props
 */
export type MenuGroupRenderProps = MenuProps & WithLevel;

/**
 * @author murukal
 *
 * @description
 * menu item render props
 */
export type MenuItemRenderProps = Omit<MenuItemProps, "key"> & WithLevel;
