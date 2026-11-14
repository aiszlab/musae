import type { CSSProperties } from "react";
import type { ComponentProps } from "./element";

type Variant = "linear" | "circular";

/**
 * @zh `Progress` 组件属性。
 * @en Props for the `Progress` component.
 */
export type ProgressProps = ComponentProps & {
  /**
   * @zh 进度条样式，默认为线性。
   * @en Progress appearance. Defaults to linear.
   */
  variant?: Variant;

  /**
   * @zh 进度最小值，默认为 `0`。
   * @en Minimum progress value. Defaults to `0`.
   */
  min?: number;

  /**
   * @zh 进度最大值，默认为 `100`。
   * @en Maximum progress value. Defaults to `100`.
   */
  max?: number;

  /**
   * @zh 当前进度值，默认为 `min`。
   * @en Current progress value. Defaults to `min`.
   */
  value?: number;

  /**
   * @zh 进度条的可访问名称。
   * @en Accessible name for the progress bar.
   */
  "aria-label"?: string;

  /**
   * @zh 提供可访问名称的元素 ID。
   * @en ID of the element that provides the accessible name.
   */
  "aria-labelledby"?: string;

  /**
   * @zh 线性进度条的高度；圆形进度条的整体尺寸。
   * @en Height of a linear progress bar or overall size of a circular one.
   */
  height?: CSSProperties["height"];

  /**
   * @zh 圆形进度条的描边粗细。
   * @en Stroke thickness of a circular progress bar.
   */
  thickness?: CSSProperties["strokeWidth"];
};

/**
 * @zh 圆形进度条属性。
 * @en Props for the circular progress bar.
 */
export type CircularProps = Pick<
  ProgressProps,
  | "value"
  | "min"
  | "max"
  | "className"
  | "style"
  | "height"
  | "thickness"
  | "aria-label"
  | "aria-labelledby"
>;

/**
 * @zh 线性进度条属性。
 * @en Props for the linear progress bar.
 */
export type LinearProps = CircularProps;
