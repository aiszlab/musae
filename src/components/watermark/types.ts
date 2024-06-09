import type { ReactNode } from "react";

/**
 * @description
 * font styles
 */
type Font = {
  /**
   * @description
   * fill color
   * @default rgba(0,0,0,.15)
   */
  color?: CanvasFillStrokeStyles["fillStyle"];

  /**
   * @description
   * font size
   * @default 16
   */
  fontSize?: number | string;

  /**
   * @description
   * font weight
   * @default normal
   */
  fontWeight?: "normal" | "light" | "weight" | number;

  /**
   * @description
   * font style
   * @default sans-serif
   */
  fontStyle?: "none" | "normal" | "italic" | "oblique";

  /**
   * @description
   * font family
   * @default normal
   */
  fontFamily?: string;

  /**
   * @description
   * text align
   * @default start
   */
  textAlign?: CanvasTextAlign;
};

/**
 * @description
 * watermark props
 */
export type WatermarkProps = {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * mark
   */
  mark: string | string[] | HTMLImageElement;

  /**
   * @description
   * width
   * @default 120
   */
  width?: number;

  /**
   * @description
   * height
   * @default 64
   */
  height?: number;

  /**
   * @description
   * font
   */
  font?: Font;
};
