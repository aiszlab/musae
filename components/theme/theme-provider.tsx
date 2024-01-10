import React, { useMemo } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { Props } from "./types";
import deepmerge from "deepmerge";
import { THEME, useStyleVariables } from "./hooks";

/**
 * @author murukal
 *
 * @description
 * theme provider
 * if user provider theme, we will merge it with presets theme
 */
const ThemeProvider = (props: Props) => {
  // merge with presets
  const theme = useMemo(() => (props.theme ? deepmerge(props.theme, THEME) : THEME), [props.theme]);
  const style = useStyleVariables({ theme });

  // provider
  return (
    <EmotionThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <div style={style}>{props.children}</div>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
