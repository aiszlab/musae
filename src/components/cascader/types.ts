import type { Key, ReactNode } from "react";
import type { Option } from "../../types/option";

export type KeyOrOption = Key | Option;

export type Value = KeyOrOption[];

export type ValueOrValues = Value[] | Value;

export type Mode = "multiple";

export type Optionable = Required<Pick<Option, "label" | "value">>;

export type ReadableOption = {
  id: number;
  label: string;
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
   */
  value?: ValueOrValues;

  /**
   * @description
   * options
   */
  options?: Option[];

  /**
   * @description
   * mode
   */
  mode?: Mode;

  /**
   * @description
   * complex
   */
  complex?: boolean;

  /**
   * @description
   * separator
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
  options?: Option[];

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
