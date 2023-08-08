import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React from "react";
import type { Props } from "./types";
import deepmerge from "deepmerge";

/**
 * @author murukal
 * @description Preset Theme
 */
export const PRESET_THEME: Props["theme"] = {
  colors: {
    primary: "#6750a4",
  },
  typography: {
    body: {
      small: {
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "16px",
      },
      large: {
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
      },
    },
  },
};

/**
 * @author murukal
 * @description create theme
 */
export const createTheme = (theme: Props["theme"]) => {
  deepmerge<Props["theme"]>(PRESET_THEME, theme);
};

/**
 * @author murukal
 * @description provider
 */
const ThemeProvider = (props: Props) => {
  return <EmotionThemeProvider theme={props.theme}>{props.children}</EmotionThemeProvider>;
};

export default ThemeProvider;
