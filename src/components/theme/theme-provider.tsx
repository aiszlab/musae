import React, { useMemo } from "react";
import type { Props, Theme } from "../../types/theme";
import { Context, PALETTE, useSwitchable } from "./hooks";
import { merge } from "@aiszlab/relax";

/**
 * @author murukal
 *
 * @description
 * theme provider
 * if user provider theme, we will merge it with presets theme
 */
const ThemeProvider = ({ theme: _theme, children }: Props) => {
  const theme = useMemo<Theme>(() => {
    if (!_theme) {
      return {
        palette: PALETTE,
      };
    }

    return merge(_theme, {
      palette: PALETTE,
    });
  }, [_theme]);

  const { mode, toggle, colors } = useSwitchable({ theme });

  return <Context.Provider value={{ colors, mode, toggle }}>{children}</Context.Provider>;
};

export default ThemeProvider;
