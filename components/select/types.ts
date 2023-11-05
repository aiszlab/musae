import type { Key, ReactNode } from "react";
import type { Option } from "../../types/option";

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
 * dropdown wrapper render props
 */
export interface DropdownWrapperRenderProps {
  /**
   * @description
   * width
   */
  width?: number;
}

/**
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * selector hooks
   */
  useSelector: (
    props: Pick<SelectProps, "value" | "options" | "mode"> & {
      close: VoidFunction;
    }
  ) => {
    options: ReactNode;
    value: Map<Key, string>;
  };
}

/**
 * @description
 * has children
 */
export type HasChildren<T> = Pick<T, Exclude<keyof T, "children">> & {
  /**
   * @description
   * only children
   */
  children?: HasChildren<T>[];
};

/**
 * @description
 * to addition
 */
export type ToAddition<T> = (option: Omit<Option, "children">) => T;

/**
 * @description
 * readable options
 */
export type ReadableOptions = Map<
  Key,
  {
    label?: string;
    children?: ReadableOptions;
  }
>;
