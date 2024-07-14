import type { Key, ReactNode } from "react";
import type { Option } from "../../types/option";
import { ComponentProps } from "../../types/element";

export type TransferOption = Omit<Option, "children">;

/**
 * @description
 * transfer props
 */
export type TransferProps = ComponentProps & {
  /**
   * @description
   * options
   */
  options: TransferOption[];

  /**
   * @description
   * value
   */
  value?: Key[];

  /**
   * @description
   * titles
   */
  titles?: [ReactNode, ReactNode];

  /**
   * @description
   * disabled
   */
  disabled?: boolean;
};

/**
 * @description
 * transfer list props
 */
export type TransferListProps = {
  /**
   * @description
   * value
   */
  value: Key[];

  /**
   * @description
   * options
   */
  options: TransferOption[];

  /**
   * @description
   * title
   */
  title?: ReactNode;

  /**
   * @description
   * change handler
   */
  onChange: (keys: Key[]) => void;
};

/**
 * @description
 * transfer item props
 */
export type TransferItemProps = {
  /**
   * @description
   * value
   */
  value: Key;

  /**
   * @description
   * label
   */
  label: ReactNode;
};

/**
 * @description
 * context value
 */
export type ContextValue = {
  /**
   * @description
   * disabled
   */
  disabled: boolean;
};
