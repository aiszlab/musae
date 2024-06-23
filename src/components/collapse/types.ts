import type { Key, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

/**
 * @description
 * `Collapse` item
 */
interface CollapseItem {
  /**
   * @description
   * key
   */
  key: Key;

  /**
   * @description
   * label
   */
  label: string;

  /**
   * @description
   * children
   */
  children: ReactNode;
}

/**
 * @description
 * `Collapse` props
 */
export interface CollapseProps extends ComponentProps {
  /**
   * @description
   * default active key
   * @default void 0
   */
  defaultActiveKeys?: Key[];

  /**
   * @description
   * items
   */
  items: CollapseItem[];

  /**
   * @description
   * change handler
   */
  onChange?: (keys: Key[]) => void;
}

/**
 * @description
 * `Collapse` item props
 */
export interface CollapseItemProps extends Omit<CollapseItem, "key"> {
  /**
   * @description
   * value
   */
  value: Key;
}

/**
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * active keys
   */
  activeKeys: Set<Key>;

  /**
   * @description
   * key toggle
   */
  toggle: (key: Key) => void;
}
