import type { Key, ReactNode } from "react";
import type { Option } from "./option";

export type KeyOrOption = Key | Option;

export type Value = KeyOrOption[];

export type ValueOrValues = Value[] | Value;

export type Mode = "multiple";

export type Optionable = Pick<Option, "label" | "value">;

export type ReadableOption = {
  id: number;
  label: ReactNode;
  children?: ReadableOptions;
};

export type ReadableOptions = Map<Key, ReadableOption>;

export type ReadablePaths = Map<number, Optionable[]>;

/**
 * @description
 * cascader props
 */
export interface CascaderProps {
  /**
   * @description
   * value
   * @default void 0
   */
  value?: ValueOrValues;

  /**
   * @description
   * options
   * @default []
   */
  options?: Option[];

  /**
   * @description
   * mode
   * @default void 0
   */
  mode?: Mode;

  /**
   * @description
   * complex
   * @default false
   */
  complex?: boolean;

  /**
   * @description
   * separator
   * @default "/"
   */
  separator?: ReactNode;
}

/**
 * @description
 * read by
 */
export interface ReadBy {
  /**
   * @description
   * options
   */
  options: Option[];

  /**
   * @description
   * from
   */
  from?: number;

  /**
   * @description
   * paths
   */
  paths?: Optionable[];
}
