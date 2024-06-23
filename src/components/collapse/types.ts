import type { Key, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

export type Value = Key | Key[];

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
  defaultActiveKey?: Value;

  /**
   * @description
   * active key
   * @default void 0
   */
  activeKey?: Value;

  /**
   * @description
   * items
   */
  items: CollapseItem[];

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: Key[]) => void;

  /**
   * @description
   * accordion mode
   * @default false
   */
  accordion?: boolean;
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
