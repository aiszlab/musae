import { useMemo } from "react";
import { Theme } from "./types";
import { useTheme as useEmotionTheme } from "@emotion/react";

/**
 * @author murukal
 *
 * @description
 * we set some presets theme
 * let ui components display well
 */
export const presets: Theme = {
  colors: {
    primary: "#6750a4",
  },
  typography: {
    body: {
      small: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "16px",
      },
      large: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
      },
    },
  },

  elevations: [
    {
      boxShadow: "none",
    },
    {
      boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
    },
    {
      boxShadow: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
    },
    {
      boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
    },
    {
      boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
    },
    {
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
    },
  ],
};

/**
 * @author murukal
 *
 * @description
 * hook wrapper for emotion theme hook
 * because emotion theme has the default value
 * but the default value can not be changed
 * set the preset theme for musae ui component
 */
export const useTheme = () => {
  // emotion theme
  const theme = useEmotionTheme();

  // if theme is empty
  const isThemeEmpty = useMemo(() => Object.keys(theme).length === 0, [theme]);

  // when is empty, we always think there are not any theme. use presets!!!
  return useMemo<Theme>(() => (isThemeEmpty ? presets : theme), [theme, isThemeEmpty]);
};
