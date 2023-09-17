import { CSSProperties, ReactNode } from "react";

type Typography = Pick<CSSProperties, "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing">;

type Elevation = Pick<CSSProperties, "boxShadow">;

/**
 * @author murukal
 *
 * @description
 * declaration for theme
 */
export interface Theme {
  typography?: {
    body?: {
      small?: Typography;
      large?: Typography;
    };

    label?: {
      small?: Typography;
      large?: Typography;
    };
  };

  elevations?: [Elevation, Elevation, Elevation, Elevation, Elevation, Elevation];

  palettes?: Palettes;
}

/**
 * @author murukal
 *
 * @description
 * theme provider
 */
export interface Props {
  /* children */
  children: ReactNode;

  /* theme */
  theme: Theme;
}

type ColorReference = {
  [key in 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 99 | 100]: string;
};

enum ColorProperty {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Error = "error",
  Neutral = "neutral",
}

/**
 * @author murukal
 *
 * @description
 * palettes
 */
export type Palettes = {
  [key in ColorProperty]: ColorReference;
};
