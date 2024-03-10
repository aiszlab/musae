import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { toColors } from "../../utils/colors";

export type Theme = {
  palette: Palette;
};

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

  /* theme */
  theme?: Theme;
}

enum ColorProperty {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Error = "error",
  Neutral = "neutral",
  NeutralVariant = "neutralVariant",
}

/**
 * @author murukal
 *
 * @description
 * palette
 */
export type Palette = {
  [key in ColorProperty]: {
    [key in 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100]: string;
  };
};

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
  mode: "light" | "dark";

  /**
   * @description
   * mode change handler
   */
  setMode: Dispatch<SetStateAction<ContextValue["mode"]>>;
}
