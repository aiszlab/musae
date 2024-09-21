import type { Key, ReactNode } from "react";
import type { Option } from "musae/types/option";
import { ComponentProps } from "musae/types/element";

export type TransferOption = Omit<Option, "children">;

/**
 * @description
 * transfer props
 */
export type TransferProps = ComponentProps & {
  /**
   * @description
   * options
   * @requires
   */
  options: TransferOption[];

  /**
   * @description
   * value
   * @default void 0
   */
  value?: Key[];

  /**
   * @description
   * titles
   * @default [null, null]
   */
  titles?: [ReactNode, ReactNode];

  /**
   * @description
   * disabled
   * @default false
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
