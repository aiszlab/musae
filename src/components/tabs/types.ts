import { ComponentProps } from "../../types/element";

export interface TabsProps extends ComponentProps {
  /**
   * @description
   * items
   */
  items: TabItem[];

  /**
   * @description
   * activeKey
   */
  activeKey?: string;
}

export interface TabItemProps {
  /**
   * @description
   * value
   */
  value: string;

  /**
   * @description
   * label
   */
  label: string;

  /**
   * @description
   * on tab item click
   */
  onClick: (key: string) => void;
}

export interface TabItem {
  /**
   * @description
   * key
   */
  key: string;

  /**
   * @description
   * label
   */
  label: string;
}

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
