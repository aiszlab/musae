// TODO tab props change, sync to docs!!!

import type { Key, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";

export interface TabsProps extends ComponentProps {
  /**
   * @description
   * items
   * @default []
   */
  items?: TabItem[];

  /**
   * @description
   * activeKey
   * @default void 0
   */
  activeKey?: Key;

  /**
   * @description
   * default active key
   * @default void 0
   */
  defaultActiveKey?: Key;

  /**
   * @description
   * forceRender
   * @default false
   */
  forceRender?: boolean;

  /**
   * @description
   * destroyable
   * @default false
   */
  destroyable?: boolean;
}

export interface TabItemProps {
  /**
   * @description
   * value
   * @requires
   */
  value: Key;

  /**
   * @description
   * label
   * @requires
   */
  label: string;

  /**
   * @description
   * on tab item click
   * @requires
   */
  onClick: (key: Key) => void;
}

export type TabItem = {
  /**
   * @description
   * key
   * @requires
   */
  key: Key;

  /**
   * @description
   * label
   * @requires
   */
  label: string;

  /**
   * @description
   * children
   */
  children?: ReactNode;
};

export interface ContextValue {
  /**
   * @description
   * item ref setter
   */
  setItem: (key: Key, itemRef: HTMLButtonElement | null) => void;

  /**
   * @description
   * active key
   */
  activeKey?: Key;
}

/**
 * @description
 * panel props
 */
export interface PanelProps {
  forceRender: boolean;
  destroyable: boolean;
  activeKey?: Key;
  items: TabItem[];
  activatedKeys: Set<Key>;
}
