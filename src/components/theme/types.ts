import type { MouseEvent, ReactNode } from "react";
import type { toColors } from "../../utils/colors";

export type Theme = {
  palette: Palette;
};

export type Mode = "light" | "dark";

/**
 * @author murukal
 *
 * @description
 * theme provider
 */
export interface Props {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * theme
   */
  theme?: Theme;
}

enum ColorProperty {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Error = "error",
  Neutral = "neutral",
  NeutralVariant = "neutralVariant",
  Success = "success",
  Warning = "warning",
}

/**
 * @author murukal
 *
 * @description
 * palette
 */
export type Palette = Record<
  Exclude<ColorProperty, ColorProperty.Success | ColorProperty.Warning>,
  Record<0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100, string>
> &
  Record<ColorProperty.Success | ColorProperty.Warning, Record<0 | 100, string>>;

/**
 * @author murukal
 *
 * @description
 * declaration for theme
 */
export interface ContextValue {
  /**
   * @description
   * colors
   */
  colors: ReturnType<typeof toColors>;

  /**
   * @description
   * theme mode
   * in musae, use light or dark
   * @example light
   */
  mode: Mode;

  /**
   * @description
   * toggle theme mode, if dark, change to light
   */
  toggle: (event?: MouseEvent) => void;
}
