import React, { useMemo } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { Props } from "./types";
import deepmerge from "deepmerge";
import { DEFAULT_THEME } from "./hooks";

/**
 * @author murukal
 *
 * @description
 * theme provider
 * if user provider theme, we will merge it with presets theme
 */
const ThemeProvider = (props: Props) => {
  // merge with presets
  const theme = useMemo(() => deepmerge(props.theme, DEFAULT_THEME), [props.theme]);

  // provider
  return <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>;
};

export default ThemeProvider;
