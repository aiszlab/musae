import React, { useMemo } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import type { Props } from "./types";
import deepmerge from "deepmerge";
import { THEME, useStyleVariables } from "./hooks";
import { createDOMRenderer, RendererProvider } from "@griffel/react";
import { Renderer } from "../../utils/ssr";

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
      <RendererProvider renderer={new Renderer().styler ?? createDOMRenderer()}>
        {/* @ts-ignore */}
        <div style={style}>{props.children}</div>
      </RendererProvider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
