import type { ContextValue, Palette } from "../components/theme/types";

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
  SurfaceVariant = "surface-variant",
  OnSurface = "on-surface",
  OnSurfaceVariant = "on-surface-variant",
  SurfaceDim = "surface-dim",

  SurfaceContainerLowest = "surface-container-lowest",
  SurfaceContainerLow = "surface-container-low",
  SurfaceContainer = "surface-container",
  SurfaceContainerHigh = "surface-container-high",
  SurfaceContainerHighest = "surface-container-highest",

  InverseSurface = "inverse-surface",
  InverseOnSurface = "inverse-on-surface",
  InversePrimary = "inverse-primary",

  Outline = "outline",
  OutlineVariant = "outline-variant",
  Scrim = "scrim",
  Shadow = "shadow",

  Success = "success",
  Warning = "warning",
}

/**
 * @description
 * convert palette to colors
 *
 * you will always be confused, there are to many color roles
 * how do i use them
 *
 * here, musae provide some easy usage
 */
export const toColors = (palette: Palette, mode: ContextValue["mode"]): Record<ColorToken, string> => {
  const isLight = mode === "light";

  return {
    [ColorToken.Primary]: isLight ? palette.primary[40] : palette.primary[80],
    [ColorToken.OnPrimary]: isLight ? palette.primary[100] : palette.primary[20],
    [ColorToken.PrimaryContainer]: isLight ? palette.primary[90] : palette.primary[30],
    [ColorToken.OnPrimaryContainer]: isLight ? palette.primary[10] : palette.primary[90],

    [ColorToken.PrimaryFixed]: palette.primary[90],
    [ColorToken.PrimaryFixedDim]: palette.primary[80],
    [ColorToken.OnPrimaryFixed]: palette.primary[10],
    [ColorToken.OnPrimaryFixedVariant]: palette.primary[30],

    [ColorToken.Secondary]: isLight ? palette.secondary[40] : palette.secondary[80],
    [ColorToken.OnSecondary]: isLight ? palette.secondary[100] : palette.secondary[20],
    [ColorToken.SecondaryContainer]: isLight ? palette.secondary[90] : palette.secondary[30],
    [ColorToken.OnSecondaryContainer]: isLight ? palette.secondary[10] : palette.secondary[90],

    [ColorToken.SecondaryFixed]: palette.secondary[90],
    [ColorToken.SecondaryFixedDim]: palette.secondary[80],
    [ColorToken.OnSecondaryFixed]: palette.secondary[10],
    [ColorToken.OnSecondaryFixedVariant]: palette.secondary[30],

    [ColorToken.Tertiary]: isLight ? palette.tertiary[40] : palette.tertiary[80],
    [ColorToken.OnTertiary]: isLight ? palette.tertiary[100] : palette.tertiary[20],
    [ColorToken.TertiaryContainer]: isLight ? palette.tertiary[90] : palette.tertiary[30],
    [ColorToken.OnTertiaryContainer]: isLight ? palette.tertiary[10] : palette.tertiary[90],

    [ColorToken.TertiaryFixed]: palette.tertiary[90],
    [ColorToken.TertiaryFixedDim]: palette.tertiary[80],
    [ColorToken.OnTertiaryFixed]: palette.tertiary[10],
    [ColorToken.OnTertiaryFixedVariant]: palette.tertiary[30],

    [ColorToken.Error]: isLight ? palette.error[40] : palette.error[80],
    [ColorToken.OnError]: isLight ? palette.error[100] : palette.error[20],
    [ColorToken.ErrorContainer]: isLight ? palette.error[90] : palette.error[30],
    [ColorToken.OnErrorContainer]: isLight ? palette.error[10] : palette.error[90],

    [ColorToken.Surface]: isLight ? palette.neutral[99] : palette.neutral[10],
    [ColorToken.SurfaceVariant]: isLight ? palette.neutralVariant[90] : palette.neutralVariant[30],
    [ColorToken.SurfaceDim]: isLight ? palette.neutral[90] : palette.neutral[10],

    [ColorToken.SurfaceContainerLowest]: isLight ? palette.neutral[100] : palette.neutral[0],
    [ColorToken.SurfaceContainerLow]: isLight ? palette.neutral[95] : palette.neutral[10],
    [ColorToken.SurfaceContainer]: isLight ? palette.neutral[95] : palette.neutral[10],
    [ColorToken.SurfaceContainerHigh]: isLight ? palette.neutral[95] : palette.neutral[10],
    [ColorToken.SurfaceContainerHighest]: isLight ? palette.neutral[90] : palette.neutral[20],

    [ColorToken.OnSurface]: isLight ? palette.neutral[10] : palette.neutral[90],
    [ColorToken.OnSurfaceVariant]: isLight ? palette.neutralVariant[30] : palette.neutralVariant[80],

    [ColorToken.InverseSurface]: isLight ? palette.neutral[20] : palette.neutral[90],
    [ColorToken.InverseOnSurface]: isLight ? palette.neutral[95] : palette.neutral[20],
    [ColorToken.InversePrimary]: isLight ? palette.primary[80] : palette.primary[40],

    [ColorToken.Outline]: isLight ? palette.neutralVariant[50] : palette.neutralVariant[60],
    [ColorToken.OutlineVariant]: isLight ? palette.neutralVariant[80] : palette.neutralVariant[30],

    [ColorToken.Shadow]: palette.neutral[0],
    [ColorToken.Scrim]: palette.neutral[0],

    [ColorToken.Success]: isLight ? palette.success[100] : palette.success[0],
    [ColorToken.Warning]: isLight ? palette.warning[100] : palette.warning[0],
  };
};
