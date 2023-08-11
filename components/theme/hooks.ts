import { useMemo } from "react";
import { Theme } from "./types";
import { PRESET_THEME } from "./theme-provider";

/**
 * @author murukal
 * @description get preset theme if there are not theme provider
 */
export const useThemeWithPreset = (theme: Theme) => {
  return useMemo(() => {
    const isNotEmpty = Object.keys(theme).length > 0;
    return isNotEmpty ? theme : PRESET_THEME;
  }, [theme]);
};
