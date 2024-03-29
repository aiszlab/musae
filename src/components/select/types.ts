import type { Key } from "react";
import type { Option } from "../../types/option";
import type { MenuItem } from "../menu";
import type { ComponentProps } from "../../types/element";

export type Mode = "multiple";

export type Value = Key | Pick<Option, "value" | "label">;

export type ValueOrValues = Value[] | Value;

/**
 * @author murukal
 *
 * @description
 * select props
 */
export interface SelectProps extends ComponentProps {
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
