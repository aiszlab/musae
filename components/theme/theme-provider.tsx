import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { Props } from "./types";

/**
 * @author murukal
 * @description provider
 */
const ThemeProvider = (props: Props) => {
  return <EmotionThemeProvider theme={props.theme}>{props.children}</EmotionThemeProvider>;
};

export default ThemeProvider;
