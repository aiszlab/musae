export interface TabsProps {
  /**
   * @description
   * items
   */
  items: TabItemType[];

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

export interface TabItemType {
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
