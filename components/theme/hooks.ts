import { useMemo } from "react";
import type { Palettes, Theme } from "./types";
import { useTheme as useEmotionTheme } from "@emotion/react";
import { isEmpty } from "../../utils/object";

const palettes: Palettes = {
  primary: {
    "0": "#000",
    "10": "#21005D",
    "20": "#381E72",
    "30": "#4F378B",
    "40": "#6750A4",
    "50": "#7F67BE",
    "60": "#9A82DB",
    "70": "#B69DF8",
    "80": "#D0BCFF",
    "90": "#EADDFF",
    "95": "#F6EDFF",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
  secondary: {
    "0": "#000",
    "10": "#1D192B",
    "20": "#332D41",
    "30": "#4F378B",
    "40": "#625B71",
    "50": "#7A7289",
    "60": "#958DA5",
    "70": "#B0A7C0",
    "80": "#CCC2DC",
    "90": "#E8DEF8",
    "95": "#F6EDFF",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
  tertiary: {
    "0": "#000",
    "10": "#31111D",
    "20": "#492532",
    "30": "#633B48",
    "40": "#7D5260",
    "50": "#986977",
    "60": "#B58392",
    "70": "#D29DAC",
    "80": "#EFB8C8",
    "90": "#FFD8E4",
    "95": "#FFECF1",
    "99": "#FFFBFA",
    "100": "#FFF",
  },
  error: {
    "0": "#000",
    "10": "#410E0B",
    "20": "#601410",
    "30": "#8C1D18",
    "40": "#B3261E",
    "50": "#DC362E",
    "60": "#E46962",
    "70": "#EC928E",
    "80": "#F2B8B5",
    "90": "#F9DEDC",
    "95": "#FCEEEE",
    "99": "#FFFBF9",
    "100": "#FFF",
  },
  neutral: {
    "0": "#000",
    "10": "#1D1B20",
    "20": "#48464C",
    "30": "#48464C",
    "40": "#605D64",
    "50": "#79767D",
    "60": "#938F96",
    "70": "#AEA9B1",
    "80": "#CAC5CD",
    "90": "#E6E0E9",
    "95": "#F5EFF7",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
};

/**
 * @author murukal
 *
 * @description
 * we set some presets theme
 * let ui components display well
 */
export const DEFAULT_THEME: Theme = {
  colors: {
    primary: palettes.primary[40],
    secondary: palettes.secondary[40],
    tertiary: palettes.tertiary[40],
    error: palettes.error[40],
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
    label: {
      large: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "20px",
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

  palettes,
};

/**
 * @author murukal
 *
 * @description
 * use valid theme for components
 */
export const useValidTheme = (usedTheme: Theme) =>
  useMemo<Theme>(() => {
    if (isEmpty(usedTheme)) return DEFAULT_THEME;
    return usedTheme;
  }, [usedTheme]);

/**
 * @author murukal
 *
 * @description
 * hook wrapper for emotion theme hook
 * because emotion theme has the default value
 * but the default value can not be changed
 * set the preset theme for musae ui component
 */
export const useTheme = (usedTheme: Theme) => {
  // emotion theme
  const theme = useEmotionTheme();
  // valid theme
  return useValidTheme(theme);
};
