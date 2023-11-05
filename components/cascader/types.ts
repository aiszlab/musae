import type { Key } from "react";
import type { Option } from "../../types/option";

type Value = Key | Option;

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
  value?: Value[];

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
