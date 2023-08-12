import React, { FC, useMemo } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { Props } from "./types";
import deepmerge from "deepmerge";
import { presets } from "./hooks";

/**
 * @author murukal
 *
 * @description
 * theme provider
 * if user provider theme, we will merge it with presets theme
 */
const ThemeProvider: FC<Props> = (props) => {
  // merge with presets
  const theme = useMemo(() => deepmerge(props.theme, presets), [props.theme]);

  // provider
  return <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>;
};

export default ThemeProvider;
