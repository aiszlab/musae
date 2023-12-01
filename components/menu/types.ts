import type { Key, ReactNode } from "react";

/**
 * @author murukal
 *
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * click event
   */
  onClick?: (key: Key) => void | Promise<void>;

  /**
   * @description
   * selected keys
   */
  selectedKeys: Key[];
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
  /**
   * @description
   * items
   */
  items: MenuItemProps[];

  /**
   * @description
   * click handler
   */
  onClick?: ContextValue["onClick"];

  /**
   * @description
   * selected keys
   */
  selectedKeys?: Key[];

  /**
   * @description
   * class name
   */
  className?: string;
}

/**
 * @author murukal
 *
 * @description
 * menu item props
 */
export interface MenuItemProps {
  /**
   * @description
   * key
   */
  key: Key;

  /**
   * @description
   * title
   */
  label?: string;

  /**
   * @description
   * prefix node
   */
  prefix?: ReactNode;

  /**
   * @description
   * children
   */
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
    id: Key;
  };

/**
 * @description
 * menu ref
 */
export interface MenuRef {
  /**
   * @description
   * scroll to
   */
  scrollTo: (key: Key) => void;
}
