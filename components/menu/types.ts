import type { Key, ReactNode } from "react";
import { ComponentProps } from "../../types/element";

export enum Order {
  Prefix = "prefix",
  Child = "child",
  Collapser = "collapser",
}

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
  selectedKeys?: Map<Key, true>;
}

/**
 * @description
 * configuration context
 */
export interface ConfigContextValue {
  /**
   * @description
   * orders
   */
  orders: Order[];
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
export interface MenuProps extends ComponentProps {
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
   * label
   */
  label?: ReactNode;

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
export interface GroupRef {
  /**
   * @description
   * group to
   */
  scrollTo: (key: Key, duration?: number) => void;

  /**
   * @description
   * toggle
   */
  toggle: (isCollapsed: boolean) => void;
}

/**
 * @description
 * menu ref
 */
export interface MenuRef {
  /**
   * @description
   * group to
   */
  scrollTo: GroupRef["scrollTo"];
}
