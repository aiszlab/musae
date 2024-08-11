import type { Key, ReactNode } from "react";
import type { ComponentProps, Size } from "../../types/element";
import type { WithLevel } from "../../types/element";

export type Mode = "vertical" | "horizontal" | "inline";

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
   * @default []
   */
  items: MenuItem[];

  /**
   * @description
   * mode
   */
  mode?: Mode;

  /**
   * @description
   * size
   * @default "medium"
   */
  size?: Size;

  /**
   * @description
   * selected keys
   * @default void 0
   */
  selectedKeys?: Key[];

  /**
   * @description
   * default selected keys
   * @default void 0
   */
  defaultSelectedKeys?: Key[];

  /**
   * @description
   * expanded keys
   * @default void 0
   */
  expandedKeys?: Key[];

  /**
   * @description
   * default expanded keys
   * @default void 0
   */
  defaultExpandedKeys?: Key[];

  /**
   * @description
   * click handler
   * @default void 0
   */
  onClick?: ContextValue["click"];
}

/**
 * @author murukal
 *
 * @description
 * menu item
 */
export type MenuItem = ComponentProps & {
  /**
   * @description
   * key
   * @requires
   */
  key: Key;

  /**
   * @description
   * label
   * @default void 0
   */
  label?: ReactNode;

  /**
   * @description
   * prefix node
   * @default void 0
   */
  prefix?: ReactNode;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: MenuItem[];
};

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
     * @default void 0
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

    /**
     * @description
     * mode
     */
    mode: Mode;
  };

/**
 * @author murukal
 *
 * @description
 * menu group props
 */
export type MenuGroupProps = ComponentProps & {
  /**
   * @description
   * menu group items
   * @requires
   */
  items: MenuItem[];

  /**
   * @description
   * current menu group display level
   * like menu, display group in level 0
   * @default 0
   */
  level?: number;

  /**
   * @description
   * current menu group is expanded
   * @default true
   */
  expanded?: boolean;

  /**
   * @description
   * mode
   * @requires
   */
  mode: Mode;
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
