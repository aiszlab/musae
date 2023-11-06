import type { Key, ReactNode } from "react";
import type { Option } from "../../types/option";
import type { MenuItemProps } from "..";

export type Mode = "multiple";

export type Value = Key | Option;

export type ValueOrValues = Key[] | Option[] | Value;

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
 * readable options
 */
export type ReadableOptions = Map<Key, string>;

/**
 * @description
 * to menu items
 */
export type ToMenuItem = (option: Option) => Pick<MenuItemProps, "key" | "label">;
