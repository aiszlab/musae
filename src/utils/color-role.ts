import type { ContextValue, Palette } from "../types/theme";

/**
 * @description
 * theme color role
 * material 3 design link: https://m3.material.io/styles/color/roles
 */
type ColorRole =
  // primary
  | "primary"
  | "on-primary"
  | "primary-container"
  | "on-primary-container"
  | "primary-fixed"
  | "on-primary-fixed"
  | "primary-fixed-dim"
  | "on-primary-fixed-variant"
  // secondary
  | "secondary"
  | "on-secondary"
  | "secondary-container"
  | "on-secondary-container"
  | "secondary-fixed"
  | "on-secondary-fixed"
  | "secondary-fixed-dim"
  | "on-secondary-fixed-variant"
  // tertiary
  | "tertiary"
  | "on-tertiary"
  | "tertiary-container"
  | "on-tertiary-container"
  | "tertiary-fixed"
  | "on-tertiary-fixed"
  | "tertiary-fixed-dim"
  | "on-tertiary-fixed-variant"
  // error
  | "error"
  | "on-error"
  | "error-container"
  | "on-error-container"
  // surface
  | "surface"
  | "on-surface"
  | "surface-variant"
  | "on-surface-variant"
  | "surface-dim"
  // surface container
  | "surface-container-lowest"
  | "surface-container-low"
  | "surface-container"
  | "surface-container-high"
  | "surface-container-highest"
  // inverse
  | "inverse-surface"
  | "inverse-on-surface"
  | "inverse-primary"
  // outline
  | "outline"
  | "outline-variant"
  // scrim
  | "scrim"
  // shadow
  | "shadow"
  // success
  | "success"
  // warning
  | "warning";

/**
 * @description
 * convert palette to color roles
 *
 * you will always be confused, there are to many color roles
 * how do i use them
 *
 * here, musae provide some easy usage
 */
export const toColorRoles = (
  palette: Palette,
  mode: ContextValue["mode"],
): Record<ColorRole, string> => {
  const isLight = mode === "light";

  return {
    primary: isLight ? palette.primary[40] : palette.primary[80],
    "on-primary": isLight ? palette.primary[100] : palette.primary[20],
    "primary-container": isLight ? palette.primary[90] : palette.primary[30],
    "on-primary-container": isLight ? palette.primary[10] : palette.primary[90],

    "primary-fixed": palette.primary[90],
    "primary-fixed-dim": palette.primary[80],
    "on-primary-fixed": palette.primary[10],
    "on-primary-fixed-variant": palette.primary[30],

    secondary: isLight ? palette.secondary[40] : palette.secondary[80],
    "on-secondary": isLight ? palette.secondary[100] : palette.secondary[20],
    "secondary-container": isLight ? palette.secondary[90] : palette.secondary[30],
    "on-secondary-container": isLight ? palette.secondary[10] : palette.secondary[90],

    "secondary-fixed": palette.secondary[90],
    "secondary-fixed-dim": palette.secondary[80],
    "on-secondary-fixed": palette.secondary[10],
    "on-secondary-fixed-variant": palette.secondary[30],

    tertiary: isLight ? palette.tertiary[40] : palette.tertiary[80],
    "on-tertiary": isLight ? palette.tertiary[100] : palette.tertiary[20],
    "tertiary-container": isLight ? palette.tertiary[90] : palette.tertiary[30],
    "on-tertiary-container": isLight ? palette.tertiary[10] : palette.tertiary[90],

    "tertiary-fixed": palette.tertiary[90],
    "tertiary-fixed-dim": palette.tertiary[80],
    "on-tertiary-fixed": palette.tertiary[10],
    "on-tertiary-fixed-variant": palette.tertiary[30],

    error: isLight ? palette.error[40] : palette.error[80],
    "on-error": isLight ? palette.error[100] : palette.error[20],
    "error-container": isLight ? palette.error[90] : palette.error[30],
    "on-error-container": isLight ? palette.error[10] : palette.error[90],

    surface: isLight ? palette.neutral[99] : palette.neutral[10],
    "surface-variant": isLight ? palette.neutralVariant[90] : palette.neutralVariant[30],
    "surface-dim": isLight ? palette.neutral[90] : palette.neutral[10],

    "surface-container-lowest": isLight ? palette.neutral[100] : palette.neutral[0],
    "surface-container-low": isLight ? palette.neutral[95] : palette.neutral[10],
    "surface-container": isLight ? palette.neutral[95] : palette.neutral[10],
    "surface-container-high": isLight ? palette.neutral[95] : palette.neutral[10],
    "surface-container-highest": isLight ? palette.neutral[90] : palette.neutral[20],

    "on-surface": isLight ? palette.neutral[10] : palette.neutral[90],
    "on-surface-variant": isLight ? palette.neutralVariant[30] : palette.neutralVariant[80],

    "inverse-surface": isLight ? palette.neutral[20] : palette.neutral[90],
    "inverse-on-surface": isLight ? palette.neutral[95] : palette.neutral[20],
    "inverse-primary": isLight ? palette.primary[80] : palette.primary[40],

    outline: isLight ? palette.neutralVariant[50] : palette.neutralVariant[60],
    "outline-variant": isLight ? palette.neutralVariant[80] : palette.neutralVariant[30],

    shadow: palette.neutral[0],
    scrim: palette.neutral[0],

    success: isLight ? palette.success[100] : palette.success[0],
    warning: isLight ? palette.warning[100] : palette.warning[0],
  };
};
