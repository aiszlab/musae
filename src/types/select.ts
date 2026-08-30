import type { Key, MouseEventHandler, ReactNode } from "react";
import type { Option } from "./option";
import type { MenuItem, MenuProps } from "./menu";
import type { ComponentProps } from "./element";
import type { RequiredIn } from "@aiszlab/relax/types";
import type { InputProps } from "./input";

export type Mode = "multiple" | "tags";

export type SelectComplexValue = Pick<Option, "value" | "label">;

export type Value = Key | SelectComplexValue;

export type ValueOrValues = Value[] | Value;

/**
 * @author murukal
 *
 * @description
 * select props
 */
export type SelectProps<T extends ValueOrValues = ValueOrValues> = ComponentProps &
  Pick<InputProps, "onBlur"> & {
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
    onSearch?: (keyword: string) => void;

    /**
     * @description
     * option filter, like array filter
     * @default void 0
     */
    onFilter?: ((keyword: string, option: Option) => boolean) | boolean;

    /**
     * @description
     * on value change, toggle
     * @default void 0
     */
    onChange?: (value: T | undefined) => void;

    /**
     * @description
     * invalid
     * @default false
     */
    invalid?: boolean;

    /**
     * placeholder
     * @description 没有选中值时，展示的兜底内容
     * @default void 0
     */
    placeholder?: string;

    /**
     * @description
     * clear handler
     * @default void 0
     */
    onClear?: () => void;

    /**
     * @description
     * disabled state of the select component
     * @default false
     */
    disabled?: boolean;
  };

/**
 * @description
 * readable options
 */
export type ReadableOptions = Map<Key, ReactNode>;

export type Filter = (option: Option) => boolean;

/**
 * @zh 选择器属性
 * @en Selector props
 */
export type SelectorProps = ComponentProps &
  Pick<
    RequiredIn<SelectProps, "searchable" | "onSearch">,
    | "searchable"
    | "mode"
    | "onSearch"
    | "onBlur"
    | "placeholder"
    | "disabled"
    | "invalid"
    | "onClear"
  > & {
    /**
     * @zh 已选值
     * @en Selected values
     */
    value: Map<Key, ReactNode>;

    /**
     * @zh 用户正在搜索的关键词
     * @en Keyword currently entered by the user
     */
    keyword: string;

    /**
     * @zh 选择值变化时的处理函数
     * @en Handler invoked when a selected value changes
     */
    onChange: (key: Key) => void;

    /**
     * @zh 关闭选择器弹层
     * @en Close the selector popup
     */
    onClose: () => void;

    /**
     * @zh 打开选择器弹层
     * @en Open the selector popup
     */
    onOpen: () => void;

    /**
     * @zh 点击选择器时的处理函数
     * @en Handler invoked when the selector is clicked
     */
    onClick?: MouseEventHandler<HTMLElement>;
  };

/**
 * @zh 选项列表属性
 * @en Selection list props
 */
export type SelectionsProps = {
  /**
   * @zh 弹层是否打开
   * @en Whether the popup is open
   */
  isOpen: boolean;

  /**
   * @zh 菜单项
   * @en Menu items
   */
  items: MenuItem[];

  /**
   * @zh 选择菜单项时的处理函数
   * @en Handler invoked when a menu item is selected
   */
  onSelect: (key: Key) => void;

  /**
   * @zh 已选菜单项键值
   * @en Selected menu item keys
   */
  selectedKeys: MenuProps["selectedKeys"];
};
