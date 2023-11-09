import type { Key } from "react";
import type { Option } from "../../types/option";

type Value = Key[] | Option[];

type ValueOrValues = Key[][] | Option[][] | Value;

export type Mode = "multiple";

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
