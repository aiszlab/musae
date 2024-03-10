import { Palette } from "../components/theme/types";

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
 * convert palette to colors
 */
export const toColors = (palette: Palette): Record<ColorToken, string> => {
  return {
    [ColorToken.Primary]: palette.primary[40],
    [ColorToken.OnPrimary]: palette.primary[100],
    [ColorToken.PrimaryContainer]: palette.primary[90],
    [ColorToken.OnPrimaryContainer]: palette.primary[10],
    [ColorToken.PrimaryFixed]: palette.primary[90],
    [ColorToken.PrimaryFixedDim]: palette.primary[80],
    [ColorToken.OnPrimaryFixed]: palette.primary[10],
    [ColorToken.OnPrimaryFixedVariant]: palette.primary[30],

    [ColorToken.Secondary]: palette.secondary[40],
    [ColorToken.OnSecondary]: palette.secondary[100],
    [ColorToken.SecondaryContainer]: palette.secondary[90],
    [ColorToken.OnSecondaryContainer]: palette.secondary[10],
    [ColorToken.SecondaryFixed]: palette.secondary[90],
    [ColorToken.SecondaryFixedDim]: palette.secondary[80],
    [ColorToken.OnSecondaryFixed]: palette.secondary[10],
    [ColorToken.OnSecondaryFixedVariant]: palette.secondary[30],

    [ColorToken.Tertiary]: palette.tertiary[40],
    [ColorToken.OnTertiary]: palette.tertiary[100],
    [ColorToken.TertiaryContainer]: palette.tertiary[90],
    [ColorToken.OnTertiaryContainer]: palette.tertiary[10],
    [ColorToken.TertiaryFixed]: palette.tertiary[90],
    [ColorToken.TertiaryFixedDim]: palette.tertiary[80],
    [ColorToken.OnTertiaryFixed]: palette.tertiary[10],
    [ColorToken.OnTertiaryFixedVariant]: palette.tertiary[30],

    [ColorToken.Error]: palette.error[40],
    [ColorToken.OnError]: palette.error[100],
    [ColorToken.ErrorContainer]: palette.error[90],
    [ColorToken.OnErrorContainer]: palette.error[10],

    [ColorToken.Surface]: "#FEF7FF",
    [ColorToken.OnSurface]: palette.neutral[10],
    [ColorToken.SurfaceDim]: "#DED8E1",
    [ColorToken.SurfaceContainer]: "#F3EDF7",
    [ColorToken.SurfaceContainerLow]: palette.primary[100],
    [ColorToken.SurfaceContainerLowest]: palette.neutral[100],
    [ColorToken.SurfaceContainerHigh]: "#ECE6F0",
    [ColorToken.SurfaceContainerHighest]: palette.neutral[90],
    [ColorToken.OnSurfaceVariant]: palette.neutralVariant[30],
    [ColorToken.InverseSurface]: palette.neutral[20],
    [ColorToken.InverseOnSurface]: palette.neutral[95],
    [ColorToken.InversePrimary]: palette.primary[80],

    [ColorToken.Outline]: palette.neutralVariant[50],
    [ColorToken.OutlineVariant]: palette.neutralVariant[80],

    [ColorToken.Shadow]: palette.neutral[0],
    [ColorToken.Scrim]: palette.neutral[0],
  };
};
