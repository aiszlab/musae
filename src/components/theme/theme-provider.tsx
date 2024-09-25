import React, { useMemo } from "react";
import type { Props, Theme } from "musae/types/theme";
import { Context, PALETTE, useSwitchable } from "./hooks";
// TODO: rewrite deepmerge into relax utils
import deepmerge from "deepmerge";

/**
 * @author murukal
 *
 * @description
 * theme provider
 * if user provider theme, we will merge it with presets theme
 */
const ThemeProvider = (props: Props) => {
  const theme = useMemo<Theme>(
    () =>
      deepmerge<Theme, Theme>(props.theme ?? {}, {
        palette: PALETTE,
      }),
    [props.theme],
  );

  const { mode, toggle, colors } = useSwitchable({ theme });

  return <Context.Provider value={{ colors, mode, toggle }}>{props.children}</Context.Provider>;
};

export default ThemeProvider;
