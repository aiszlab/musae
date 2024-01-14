import { Palettes } from "../components/theme/types";

/**
 * @description
 * theme token
 */
export enum ColorToken {
  Primary = "primary",
  OnPrimary = "on-primary",
  PrimaryContainer = "primary-container",
  OnPrimaryContainer = "on-primary-container",
  PrimaryFixed = "primary-fixed",
  OnPrimaryFixed = "on-primary-fixed",
  PrimaryFixedDim = "primary-fixed-dim",
  OnPrimaryFixedVariant = "on-primary-fixed-variant",

  Secondary = "secondary",
  OnSecondary = "on-secondary",
  SecondaryContainer = "secondary-container",
  OnSecondaryContainer = "on-secondary-container",
  SecondaryFixed = "secondary-fixed",
  OnSecondaryFixed = "on-secondary-fixed",
  SecondaryFixedDim = "secondary-fixed-dim",
  OnSecondaryFixedVariant = "on-secondary-fixed-variant",

  Tertiary = "tertiary",
  OnTertiary = "on-tertiary",
  TertiaryContainer = "tertiary-container",
  OnTertiaryContainer = "on-tertiary-container",
  TertiaryFixed = "tertiary-fixed",
  OnTertiaryFixed = "on-tertiary-fixed",
  TertiaryFixedDim = "tertiary-fixed-dim",
  OnTertiaryFixedVariant = "on-tertiary-fixed-variant",

  Error = "error",
  OnError = "on-error",
  ErrorContainer = "error-container",
  OnErrorContainer = "on-error-container",

  Surface = "surface",
  OnSurface = "on-surface",
  OnSurfaceVariant = "on-surface-variant",
  SurfaceDim = "surface-dim",
  SurfaceContainer = "surface-container",
  SurfaceContainerLow = "surface-container-low",
  SurfaceContainerLowest = "surface-container-lowest",
  SurfaceContainerHigh = "surface-container-high",
  SurfaceContainerHighest = "surface-container-highest",
  InverseSurface = "inverse-surface",
  InverseOnSurface = "inverse-on-surface",
  InversePrimary = "inverse-primary",

  Outline = "outline",
  OutlineVariant = "outline-variant",
  Scrim = "scrim",
  Shadow = "shadow",
}

/**
 * @description
 * convert palettes to colors
 */
export const toColors = (palettes: Palettes): Record<ColorToken, string> => {
  return {
    [ColorToken.Primary]: palettes.primary[40],
    [ColorToken.OnPrimary]: palettes.primary[100],
    [ColorToken.PrimaryContainer]: palettes.primary[90],
    [ColorToken.OnPrimaryContainer]: palettes.primary[10],
    [ColorToken.PrimaryFixed]: palettes.primary[90],
    [ColorToken.PrimaryFixedDim]: palettes.primary[80],
    [ColorToken.OnPrimaryFixed]: palettes.primary[10],
    [ColorToken.OnPrimaryFixedVariant]: palettes.primary[30],

    [ColorToken.Secondary]: palettes.secondary[40],
    [ColorToken.OnSecondary]: palettes.secondary[100],
    [ColorToken.SecondaryContainer]: palettes.secondary[90],
    [ColorToken.OnSecondaryContainer]: palettes.secondary[10],
    [ColorToken.SecondaryFixed]: palettes.secondary[90],
    [ColorToken.SecondaryFixedDim]: palettes.secondary[80],
    [ColorToken.OnSecondaryFixed]: palettes.secondary[10],
    [ColorToken.OnSecondaryFixedVariant]: palettes.secondary[30],

    [ColorToken.Tertiary]: palettes.tertiary[40],
    [ColorToken.OnTertiary]: palettes.tertiary[100],
    [ColorToken.TertiaryContainer]: palettes.tertiary[90],
    [ColorToken.OnTertiaryContainer]: palettes.tertiary[10],
    [ColorToken.TertiaryFixed]: palettes.tertiary[90],
    [ColorToken.TertiaryFixedDim]: palettes.tertiary[80],
    [ColorToken.OnTertiaryFixed]: palettes.tertiary[10],
    [ColorToken.OnTertiaryFixedVariant]: palettes.tertiary[30],

    [ColorToken.Error]: palettes.error[40],
    [ColorToken.OnError]: palettes.error[100],
    [ColorToken.ErrorContainer]: palettes.error[90],
    [ColorToken.OnErrorContainer]: palettes.error[10],

    [ColorToken.Surface]: "#FEF7FF",
    [ColorToken.OnSurface]: palettes.neutral[10],
    [ColorToken.SurfaceDim]: "#DED8E1",
    [ColorToken.SurfaceContainer]: "#F3EDF7",
    [ColorToken.SurfaceContainerLow]: palettes.primary[100],
    [ColorToken.SurfaceContainerLowest]: palettes.neutral[100],
    [ColorToken.SurfaceContainerHigh]: "#ECE6F0",
    [ColorToken.SurfaceContainerHighest]: palettes.neutral[90],
    [ColorToken.OnSurfaceVariant]: palettes.neutralVariant[30],
    [ColorToken.InverseSurface]: palettes.neutral[20],
    [ColorToken.InverseOnSurface]: palettes.neutral[95],
    [ColorToken.InversePrimary]: palettes.primary[80],

    [ColorToken.Outline]: palettes.neutralVariant[50],
    [ColorToken.OutlineVariant]: palettes.neutralVariant[80],

    [ColorToken.Shadow]: palettes.neutral[0],
    [ColorToken.Scrim]: palettes.neutral[0],
  };
};
