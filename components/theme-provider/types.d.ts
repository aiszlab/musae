import { CSSProperties, ReactNode } from "react";

type Typography = Pick<CSSProperties, "fontSize" | "fontStyle" | "fontWeight" | "lineHeight" | "letterSpacing">;

/**
 * @description theme declaration
 */
interface Theme {
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
 * @description theme provider
 */
export interface Props {
  /* children */
  children: ReactNode;

  /* theme */
  theme: Theme;
}
