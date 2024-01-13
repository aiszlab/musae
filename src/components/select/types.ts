import type { Key } from "react";
import type { Option } from "../../types/option";
import type { MenuItem } from "../menu";

export type Mode = "multiple";

export type Value = Key | Option;

export type ValueOrValues = Value[] | Value;

/**
 * @author murukal
 *
 * @description
 * select props
 */
export interface SelectProps {
  /**
   * @description
   * options
   */
  options?: Option[];

  /**
   * @description
   * complex
   */
  complex?: boolean;

  /**
   * @description
   * value
   */
  value?: ValueOrValues;

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
export type ReadableOptions = Map<Key, string>;

/**
 * @description
 * to menu items
 */
export type ToMenuItem = (option: Option) => Pick<MenuItem, "key" | "label">;
