import type { Key, ReactNode } from "react";
import type { ComponentProps, Size, StylexProps } from "../../types/element";
import type { WithLevel } from "../../types/element";

export type Variant = "filled" | "outlined" | "text";

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
  click: (key: Key) => void | Promise<void>;

  /**
   * @description
   * toggle handler
   */
  toggle: (key: Key) => void | Promise<void>;

  /**
   * @description
   * collect
   */
  collect: (key: Key, item: HTMLLIElement) => void;

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

  variant: Variant;

  size: Size;
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
  onClick?: ContextValue["click"];

  /**
   * @description
   * selected keys
   */
  selectedKeys?: Key[];

  /**
   * @description
   * default selected keys
   */
  defaultSelectedKeys?: Key[];

  /**
   * @description
   * expanded keys
   */
  expandedKeys?: Key[];

  /**
   * @description
   * default expanded keys
   */
  defaultExpandedKeys?: Key[];

  /**
   * @description
   * you can use the variant in the Menu component to change the hover style of the Menu items.
   */
  variant?: Variant;

  /**
   * @description
   * size
   */
  size?: Size;
}

/**
 * @author murukal
 *
 * @description
 * menu item
 */
export interface MenuItem extends ComponentProps {
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
 * menu item render props
 */
export type MenuItemProps = WithLevel<Omit<MenuItem, "key" | "children">> &
  ComponentProps & {
    /**
     * @description
     * value
     */
    value: Key;

    /**
     * @description
     * suffix
     */
    suffix?: ReactNode;

    /**
     * @description
     * click handler
     */
    onClick?: ContextValue["click"];

    /**
     * @description
     * children
     */
    children?: ReactNode;
  };

/**
 * @author murukal
 *
 * @description
 * menu group props
 */
export type MenuGroupProps = ComponentProps &
  StylexProps & {
    /**
     * @description
     * menu group items
     */
    items?: MenuItem[];

    /**
     * @description
     * current menu group display level
     * like menu, display group in level 0
     */
    level?: number;

    /**
     * @description
     * current menu group is expanded
     */
    expanded?: boolean;
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
