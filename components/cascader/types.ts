import type { Key } from "react";
import type { Option } from "../../types/option";

export type KeyOrOption = Key | Option;

export type Value = KeyOrOption[];

export type ValueOrValues = Value[] | Value;

export type Mode = "multiple";

export type Optionable = Pick<Option, "label" | "value">;

export type ReverseIds = Map<
  Key,
  {
    id?: number;
    children?: ReverseIds;
  }
>;

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
}

/**
 * @description
 * readable options
 */
export type ReadableOptions = Map<
  Key,
  {
    label: string;
    children?: ReadableOptions;
  }
>;

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
  paths?: Key[];
}
