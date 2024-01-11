import { CSSProperties, useMemo } from "react";
import { type Palettes, type Theme, _Theme } from "./types";
import { useTheme as useEmotionTheme } from "@emotion/react";
import { isEmpty } from "@aiszlab/relax";
import { ColorRole } from "./color-role";
import { Token } from "./token";

const PALETTES: Readonly<Palettes> = {
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
 * @author murukal
 *
 * @description
 * we set some presets theme
 * let ui components display well
 */
export const THEME: Readonly<Theme> = {
  typography: {
    headline: {
      small: {
        fontSize: 24,
        fontWeight: 400,
        lineHeight: "32px",
      },
    },

    body: {
      small: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: "16px",
      },
      medium: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "20px",
      },
      large: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
      },
    },

    label: {
      small: {
        fontSize: 11,
        fontWeight: 500,
        lineHeight: "16px",
      },
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

  /// color
  palettes: PALETTES,
};

/**
 * @description
 * to color tokens
 */
const toColorTokens = (theme: Theme) => {
  return {
    [Token.ColorPrimary]: theme.palettes.primary[40],
    [Token.ColorOnPrimary]: theme.palettes.primary[100],
    [Token.ColorPrimaryContainer]: theme.palettes.primary[90],
    [Token.ColorOnPrimaryContainer]: theme.palettes.primary[10],
    [Token.ColorPrimaryFixed]: theme.palettes.primary[90],
    [Token.ColorPrimaryFixedDim]: theme.palettes.primary[80],
    [Token.ColorOnPrimaryFixed]: theme.palettes.primary[10],
    [Token.ColorOnPrimaryFixedVariant]: theme.palettes.primary[30],

    [Token.ColorSecondary]: theme.palettes.secondary[40],
    [Token.ColorOnSecondary]: theme.palettes.secondary[100],
    [Token.ColorSecondaryContainer]: theme.palettes.secondary[90],
    [Token.ColorOnSecondaryContainer]: theme.palettes.secondary[10],
    [Token.ColorSecondaryFixed]: theme.palettes.secondary[90],
    [Token.ColorSecondaryFixedDim]: theme.palettes.secondary[80],
    [Token.ColorOnSecondaryFixed]: theme.palettes.secondary[10],
    [Token.ColorOnSecondaryFixedVariant]: theme.palettes.secondary[30],

    [Token.ColorTertiary]: theme.palettes.tertiary[40],
    [Token.ColorOnTertiary]: theme.palettes.tertiary[100],
    [Token.ColorTertiaryContainer]: theme.palettes.tertiary[90],
    [Token.ColorOnTertiaryContainer]: theme.palettes.tertiary[10],
    [Token.ColorTertiaryFixed]: theme.palettes.tertiary[90],
    [Token.ColorTertiaryFixedDim]: theme.palettes.tertiary[80],
    [Token.ColorOnTertiaryFixed]: theme.palettes.tertiary[10],
    [Token.ColorOnTertiaryFixedVariant]: theme.palettes.tertiary[30],

    [Token.ColorError]: theme.palettes.error[40],
    [Token.ColorOnError]: theme.palettes.error[100],
    [Token.ColorErrorContainer]: theme.palettes.error[90],
    [Token.ColorOnErrorContainer]: theme.palettes.error[10],

    [Token.ColorSurface]: "#FEF7FF",
    [Token.ColorOnSurface]: theme.palettes.neutral[10],
    [Token.ColorSurfaceDim]: "#DED8E1",
    [Token.ColorSurfaceContainer]: "#F3EDF7",
    [Token.ColorSurfaceContainerLow]: theme.palettes.primary[100],
    [Token.ColorSurfaceContainerLowest]: theme.palettes.neutral[100],
    [Token.ColorSurfaceContainerHigh]: "#ECE6F0",
    [Token.ColorSurfaceContainerHighest]: theme.palettes.neutral[90],
    [Token.ColorOnSurfaceVariant]: theme.palettes.neutralVariant[30],
    [Token.ColorInverseSurface]: theme.palettes.neutral[20],
    [Token.ColorInverseOnSurface]: theme.palettes.neutral[95],
    [Token.ColorInversePrimary]: theme.palettes.primary[80],

    [Token.ColorOutline]: theme.palettes.neutralVariant[50],
    [Token.ColorOutlineVariant]: theme.palettes.neutralVariant[80],

    [Token.ColorShadow]: theme.palettes.neutral[0],
    [Token.ColorScrim]: theme.palettes.neutral[0],
  };
};

/**
 * @description
 * default color tokens
 */
export const COLOR_TOKENS = toColorTokens(THEME);

/**
 * @author murukal
 *
 * @description
 * use valid theme for components
 */
export const useValidTheme = (usedTheme: Partial<Theme>) => {
  return useMemo<_Theme>(() => {
    // empty theme, use default
    const _theme = isEmpty(usedTheme) ? THEME : (usedTheme as Theme);
    // add color role
    return {
      ..._theme,
      colorRole: new ColorRole(_theme.palettes),
    };
  }, [usedTheme]);
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
  // valid theme
  return useValidTheme(theme);
};

/**
 * @author murukal
 *
 * @description
 * in musae, use color variables from theme
 * add style variables
 */
export const useStyleVariables = ({ theme }: { theme: Theme }) => {
  const style = useMemo<Record<Token, string>>(() => {
    return toColorTokens(theme);
  }, [theme]);

  return style as CSSProperties;
};
