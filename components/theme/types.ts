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
  colors?: {
    primary?: string;
  };

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
