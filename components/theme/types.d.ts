import { CSSProperties, ReactNode } from "react";

type Typography = Pick<CSSProperties, "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing">;

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
  };
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
