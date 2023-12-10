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
  onClick?: (key: Key) => void | Promise<void>;

  /**
   * @description
   * selected keys
   */
  selectedKeys?: Map<Key, true>;
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
export type MenuGroupProps = WithLevel<MenuProps>;

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
