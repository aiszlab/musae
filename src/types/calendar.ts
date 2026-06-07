import type { Dayjs } from "dayjs";
import type { Partialable } from "@aiszlab/relax/types";
import type { ComponentProps } from "./element";

/**
 * calendar props
 * @zh 日历组件属性
 */
export type CalendarProps = ComponentProps & {
  /**
   * value
   * @zh 选中值
   * @default void 0
   */
  value?: Dayjs | [Partialable<Dayjs>, Partialable<Dayjs>];

  /**
   * click date handler
   * @zh 日期点击回调
   * @default void 0
   */
  onClick?: (value: Dayjs) => void;

  /**
   * specify the date that cannot be selected
   * @zh 指定不可选择的日期
   * @default void 0
   */
  disabledDate?: (date: Dayjs) => boolean;
};

export type Contribution = {
  /**
   * contributedAt
   * @zh 贡献日期
   */
  contributedAt: Dayjs;

  /**
   * count
   * @zh 贡献次数
   */
  count: number;
};

/**
 * contribution calendar props
 * @zh 贡献日历组件属性
 */
export type ContributionCalendarProps = {
  /**
   * year
   * @zh 年份
   */
  year: number;

  /**
   * contributions
   * @zh 贡献数据
   */
  contributions?: Contribution[];

  /**
   * gap
   * @zh 间距
   * @default 5
   */
  gap?: number;

  /**
   * levels
   * @zh 等级数量
   * @default 5
   */
  levels?: number;
};

/**
 * calendar ref
 * @zh 日历组件 ref
 */
export interface CalendarRef {
  /**
   * reset
   * @zh 重置
   */
  reset: () => void;
}
