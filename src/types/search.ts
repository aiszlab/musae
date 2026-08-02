import type { ReactNode } from "react";
import { ComponentProps } from "./element";

/**
 * @zh Search 组件的 ref 方法
 * @en Ref methods for Search component
 */
export interface SearchRef {
  /**
   * @zh 聚焦输入框
   * @en Focus the input
   */
  focus: () => void;

  /**
   * @zh 使输入框失去焦点
   * @en Blur the input
   */
  blur: () => void;

  /**
   * @zh 清空输入值
   * @en Clear the input value
   */
  clear: () => void;

  /**
   * @zh 获取当前输入值
   * @en Get the current input value
   */
  getValue: () => string;
}

/**
 * @zh Search 组件属性入参
 * @en Search component props
 */
export type SearchProps = ComponentProps & {
  /**
   * @zh 受控值
   * @en Controlled value
   * @default undefined
   */
  value?: string;

  /**
   * @zh 非受控默认值
   * @en Default value for uncontrolled mode
   * @default ""
   */
  defaultValue?: string;

  /**
   * @zh 值变化时的回调
   * @en Callback when value changes
   * @default undefined
   */
  onChange?: (value: string) => void;

  /**
   * @zh 输入框占位文本
   * @en Placeholder text for the input
   * @default undefined
   */
  placeholder?: string;

  /**
   * @zh 是否禁用
   * @en Whether the search is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * @zh 是否显示清除按钮（输入值非空时）
   * @en Whether to show a clear button when input is non-empty
   * @default true
   */
  clearable?: boolean;

  /**
   * @zh 定制搜索按钮
   * @en Custom search button content
   * @default undefined
   */
  searchButton?: ReactNode;

  /**
   * @zh 用户触发搜索时的回调函数
   * @en Callback when search is triggered
   * @default undefined
   */
  onSearch?: (keyword?: string) => void;

  /**
   * @zh 点击清除按钮时的回调函数
   * @en Callback when the clear button is clicked
   * @default undefined
   */
  onClear?: () => void;
};
