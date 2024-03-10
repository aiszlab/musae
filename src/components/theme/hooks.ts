import { createContext, useContext, useMemo, useState } from "react";
import type { Palette, ContextValue, Theme } from "./types";
import { toColors } from "../../utils/colors";
import deepmerge from "deepmerge";

const PALETTE: Readonly<Palette> = {
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
    "30": "#4A4458",
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
  neutralVariant: {
    "0": "#000",
    "10": "#1D1A22",
    "20": "#322F37",
    "30": "#49454F",
    "40": "#605D66",
    "50": "#79747E",
    "60": "#938F99",
    "70": "#AEA9B4",
    "80": "#CAC4D0",
    "90": "#E7E0EC",
    "95": "#F5EEFA",
    "99": "#FFFBFE",
    "100": "#FFF",
  },
};

/**
 * @description
 * theme context
 */
export const Context = createContext<ContextValue>({
  colors: toColors(PALETTE, "light"),
  mode: "light",
  setMode: () => void 0,
});

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
  return useContext(Context);
};

/**
 * @description
 * context value
 */
export const useContextValue = ({ theme }: { theme?: Theme }) => {
  const [mode, setMode] = useState<ContextValue["mode"]>("light");

  const _theme = useMemo<Theme>(() => {
    return deepmerge<Theme, Theme>(theme ?? {}, {
      palette: PALETTE,
    });
  }, [theme]);

  return useMemo<ContextValue>(() => {
    return {
      colors: toColors(_theme.palette, mode),
      mode,
      setMode,
    };
  }, [_theme, mode]);
};
