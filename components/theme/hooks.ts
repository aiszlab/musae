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
