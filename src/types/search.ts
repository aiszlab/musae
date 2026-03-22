import type { ReactNode } from "react";
import { ComponentProps } from "./element";

/**
 * `Search`组件属性入参
 */
export type SearchProps = ComponentProps & {
  /**
   * 定制搜索按钮
   * @default undefined
   */
  searchButton?: ReactNode;

  /**
   * 用户点击搜索时的回调函数
   * @default undefined
   */
  onSearch?: (keyword?: string) => void;
};
