import type { Key } from "react";
import type { Option } from "./option";
import type { MenuItem, MenuProps } from "./menu";
import type { ComponentProps } from "./element";
import type { RequiredIn } from "@aiszlab/relax/types";
import type { PickerProps } from "./picker";

export type Mode = "multiple";

export type Value = Key | Pick<Option, "value" | "label">;

export type ValueOrValues = Value[] | Value;

/**
 * @author murukal
 *
 * @description
 * select props
 */
export type SelectProps<T extends ValueOrValues = ValueOrValues> = ComponentProps &
  Pick<PickerProps, "onBlur"> & {
    /**
     * @description
     * options
     * @default []
     */
    options?: Option[];

    /**
     * @description
     * complex
     * @default false
     */
    complex?: boolean;

    /**
     * @description
     * value
     * @default void 0
     */
    value?: ValueOrValues;

    /**
     * @description
     * mode
     * @default void 0
     */
    mode?: Mode;

    /**
     * @description
     * searchable
     * @default false
     */
    searchable?: boolean;

    /**
     * @description
     * search handler
     * @default void 0
     */
    onSearch?: (searched: string) => void;

    /**
     * @description
     * option filter, like array filter
     * @default void 0
     */
    onFilter?: ((searched: string, option: Option) => boolean) | boolean;

    /**
     * @description
     * on value change, toggle
     * @default void 0
     */
    onChange?: (value: T) => void;

    /**
     * @description
     * invalid
     * @default false
     */
    invalid?: boolean;

    // TODO: docs
    /**
     * @description
     * placeholder
     * @default void 0
     */
    placeholder?: string;

    /**
     * @description
     * clear handler
     * @default void 0
     */
    onClear?: () => void;
  };

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

export type Filter = (option: Option) => boolean;

/**
 * @description
 * selected props
 */
export type SelectorProps = Pick<
  RequiredIn<SelectProps, "searchable" | "onSearch">,
  "searchable" | "mode" | "onSearch" | "onBlur" | "placeholder"
> & {
  /**
   * @description
   * value
   */
  value: Map<Key, string>;

  /**
   * @description
   * searched value
   */
  searched: string;

  /**
   * @description
   * change
   */
  onChange: (key: Key) => void;
};

/**
 * @description
 * selector ref
 */
export type SelectorRef = {
  /**
   * @description
   * focus
   */
  focus: () => void;
};

/**
 * @description
 * selections props
 */
export type SelectionsProps = {
  /**
   * @description
   * menu items
   */
  items: MenuItem[];

  /**
   * @description
   * select menu item handler
   */
  onSelect: (key: Key) => void;

  /**
   * @description
   * selected keys
   */
  selectedKeys: MenuProps["selectedKeys"];
};
