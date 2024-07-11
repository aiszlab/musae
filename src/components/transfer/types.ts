import type { Key, ReactNode } from "react";
import type { Option } from "../../types/option";

export type TransferOption = Omit<Option, "children">;

/**
 * @description
 * transfer props
 */
export type TransferProps = {
  /**
   * @description
   * options
   */
  options: TransferOption[];

  /**
   * @description
   * value
   */
  value: Key[];
};

/**
 * @description
 * transfer list props
 */
export type TransferListProps = {
  /**
   * @description
   * options
   */
  options: TransferOption[];
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
  value: Key

  /**
   * @description
   * label
   */
  label: ReactNode
}
