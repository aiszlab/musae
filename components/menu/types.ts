import type { Key, ReactNode, RefObject } from "react";
import type { ComponentProps, WithId } from "../../types/element";
import type { WithLevel } from "../../types/element";

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
  onClick: (key: Key) => void | Promise<void>;

  /**
   * @description
   * expand handler
   */
  onExpand: (key: Key) => void | Promise<void>;

  /**
   * @description
   * collapse handler
   */
  onCollapse: (key: Key) => void | Promise<void>;

  /**
   * @description
   * selected keys
   */
  selectedKeys: Set<Key>;

  /**
   * @description
   * expanded keys
   */
  expandedKeys: Set<Key>;
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
  items: MenuItem[];

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
   * expanded keys
   */
  expandedKeys?: Key[];
}

/**
 * @author murukal
 *
 * @description
 * menu item
 */
export interface MenuItem {
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
  children?: MenuItem[];
}

/**
 * @author murukal
 *
 * @description
 * menu group render props
 */
export type MenuGroupProps = WithLevel<MenuProps> & {
  /**
   * @description
   * belong to
   */
  belongTo?: Key;
};

/**
 * @author murukal
 *
 * @description
 * menu item render props
 */
export type MenuItemProps = WithLevel<WithId<Omit<MenuItem, "key" | "children">>> & {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * related group ref
   */
  groupRef: RefObject<GroupRef>;
};

/**
 * @description
 * menu ref
 */
export interface MenuRef {
  /**
   * @description
   * group to
   */
  scrollTo: (key: Key, duration?: number) => void;
}
