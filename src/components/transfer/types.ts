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
  value?: Key[];

  // TODO add to docs
  /**
   * @description
   * titles
   */
  titles?: [ReactNode, ReactNode];
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
