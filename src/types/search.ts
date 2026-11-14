import type { Key, ReactNode } from "react";
import { ComponentProps } from "./element";

/**
 * @zh Search View 展示模式
 * @en Search View display mode
 */
export type SearchView = "auto" | "modal" | "full-screen";

/**
 * @zh 已解析的 Search View 展示模式
 * @en Resolved Search View display mode
 */
export type ResolvedSearchView = Exclude<SearchView, "auto">;

/**
 * @zh Search 搜索结果项
 * @en Search result item
 */
export type SearchItem = {
  key: Key;
  value: string;
  label: ReactNode;
  supportingText?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  disabled?: boolean;
};

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
   * @zh Search View 展示模式
   * @en Search View display mode
   * @default "auto"
   */
  view?: SearchView;

  /**
   * @zh 受控打开状态
   * @en Controlled open state
   * @default undefined
   */
  open?: boolean;

  /**
   * @zh 非受控默认打开状态
   * @en Default open state for uncontrolled mode
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * @zh 打开状态变化时的回调
   * @en Callback when the open state changes
   * @default undefined
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * @zh 搜索结果项
   * @en Search result items
   * @default []
   */
  items?: SearchItem[];

  /**
   * @zh 自定义搜索结果项内容
   * @en Custom search result item content
   * @default undefined
   */
  renderItem?: (item: SearchItem) => ReactNode;

  /**
   * @zh 选择搜索结果项时的回调
   * @en Callback when a search result item is selected
   * @default undefined
   */
  onSelect?: (item: SearchItem) => void;

  /**
   * @zh 选择搜索结果项后是否关闭 Search View
   * @en Whether to close the Search View after selecting a search result item
   * @default true
   */
  closeOnSelect?: boolean;

  /**
   * @zh Search 前置内容
   * @en Search leading content
   * @default undefined
   */
  leading?: ReactNode;

  /**
   * @zh Search 后置内容
   * @en Search trailing content
   * @default undefined
   */
  trailing?: ReactNode | ReactNode[];

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
