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
