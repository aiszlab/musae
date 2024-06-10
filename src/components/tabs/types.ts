import { ComponentProps } from "../../types/element";

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
  activeKey?: string;
}

export interface TabItemProps {
  /**
   * @description
   * value
   * @requires
   */
  value: string;

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
  onClick: (key: string) => void;
}

export type TabItem = {
  /**
   * @description
   * key
   * @requires
   */
  key: string;

  /**
   * @description
   * label
   * @requires
   */
  label: string;
};

export interface ContextValue {
  /**
   * @description
   * item ref setter
   */
  setItem: (key: string, itemRef: HTMLButtonElement | null) => void;

  /**
   * @description
   * active key
   */
  activeKey?: string;
}
