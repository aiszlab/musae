import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import React from "react";
import type { Props } from "./types";
import deepmerge from "deepmerge";

/**
 * @author murukal
 * @description default theme
 */
const DEFAULT_THEME: Props["theme"] = {
  colors: {
    primary: "#6750a4",
  },
};

/**
 * @author murukal
 * @description create theme
 */
export const createTheme = (theme: Props["theme"]) => {
  deepmerge<Props["theme"]>(DEFAULT_THEME, theme);
};

/**
 * @author murukal
 * @description provider
 */
const ThemeProvider = (props: Props) => {
  return <EmotionThemeProvider theme={props.theme}>{props.children}</EmotionThemeProvider>;
};

export default ThemeProvider;
