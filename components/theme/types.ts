import { CSSProperties, ReactNode } from "react";
import { type ColorRole } from "./color-role";

type Typography = Pick<CSSProperties, "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing">;

type Elevation = Pick<CSSProperties, "boxShadow">;

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
  theme?: Theme;
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
  NeutralVariant = "neutralVariant",
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

/**
 * @author murukal
 *
 * @description
 * declaration for theme
 */
export interface _Theme {
  typography: {
    headline: {
      small?: Typography;
      medium?: Typography;
      large?: Typography;
    };

    body: {
      small?: Typography;
      medium?: Typography;
      large?: Typography;
    };

    label: {
      small?: Typography;
      medium?: Typography;
      large?: Typography;
    };
  };

  elevations: [Elevation, Elevation, Elevation, Elevation, Elevation, Elevation];

  palettes: Palettes;

  colorRole: ColorRole;
}

export type Theme = Omit<_Theme, "colorRole">;
