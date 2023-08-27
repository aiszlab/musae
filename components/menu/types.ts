import type { Key, ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * context value
 */
export interface ContextValue {
  onClick?: (key: string) => void | Promise<void>;
}

export interface WithLevel {
  /* level */
  level?: number;
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

  /* on click */
  onClick?: ContextValue["onClick"];
}

/**
 * @author murukal
 *
 * @description
 * menu item props
 */
export interface MenuItemProps {
  /* key */
  key: string;

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
export type MenuGroupRenderProps = MenuProps & WithLevel;

/**
 * @author murukal
 *
 * @description
 * menu item render props
 */
export type MenuItemRenderProps = Omit<MenuItemProps, "key"> &
  WithLevel & {
    id: string;
  };
