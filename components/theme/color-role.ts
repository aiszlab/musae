import type { Palettes } from "./types";

/**
 * @description
 * class role
 */
export class ColorRole {
  readonly #palettes: Palettes;

  constructor(palettes: Palettes) {
    this.#palettes = palettes;
  }

  /// primary
  get primary() {
    return this.#palettes.primary[40];
  }
  get onPrimary() {
    return this.#palettes.primary[100];
  }
  get primaryContainer() {
    return this.#palettes.primary[90];
  }
  get onPrimaryContainer() {
    return this.#palettes.primary[10];
  }
  get primaryFixed() {
    return this.#palettes.primary[90];
  }
  get primaryFixedDim() {
    return this.#palettes.primary[80];
  }
  get onPrimaryFixed() {
    return this.#palettes.primary[10];
  }
  get onPrimaryFixedVariant() {
    return this.#palettes.primary[30];
  }

  /// secondary
  get secondary() {
    return this.#palettes.secondary[40];
  }
  get onSecondary() {
    return this.#palettes.secondary[100];
  }
  get secondaryContainer() {
    return this.#palettes.secondary[90];
  }
  get onSecondaryContainer() {
    return this.#palettes.secondary[10];
  }
  get secondaryFixed() {
    return this.#palettes.secondary[90];
  }
  get secondaryFixedDim() {
    return this.#palettes.secondary[80];
  }
  get onSecondaryFixed() {
    return this.#palettes.secondary[10];
  }
  get onSecondaryFixedVariant() {
    return this.#palettes.secondary[30];
  }

  /// tertiary
  get tertiary() {
    return this.#palettes.tertiary[40];
  }
  get onTertiary() {
    return this.#palettes.tertiary[100];
  }
  get tertiaryContainer() {
    return this.#palettes.tertiary[90];
  }
  get onTertiaryContainer() {
    return this.#palettes.tertiary[10];
  }
  get tertiaryFixed() {
    return this.#palettes.tertiary[90];
  }
  get tertiaryFixedDim() {
    return this.#palettes.tertiary[80];
  }
  get onTertiaryFixed() {
    return this.#palettes.tertiary[10];
  }
  get onTertiaryFixedVariant() {
    return this.#palettes.tertiary[30];
  }

  /// error
  get error() {
    return this.#palettes.error[40];
  }
  get onError() {
    return this.#palettes.error[100];
  }
  get errorContainer() {
    return this.#palettes.error[90];
  }
  get onErrorContainer() {
    return this.#palettes.error[10];
  }

  /// surface
  get surface() {
    return "#FEF7FF";
  }
  get surfaceDim() {
    return "#DED8E1";
  }
  get surfaceContainerLowest() {
    return this.#palettes.neutral[100];
  }
  get surfaceContainerLow() {
    return this.#palettes.primary[100];
  }
  get surfaceContainer() {
    return "#F3EDF7";
  }
  get surfaceContainerHigh() {
    return "#ECE6F0";
  }
  get surfaceContainerHighest() {
    return this.#palettes.neutral[90];
  }
  get onSurface() {
    return this.#palettes.neutral[10];
  }
  get onSurfaceVariant() {
    return this.#palettes.neutralVariant[30];
  }
  get inverseSurface() {
    return this.#palettes.neutral[20];
  }
  get inverseOnSurface() {
    return this.#palettes.neutral[95];
  }
  get inversePrimary() {
    return this.#palettes.primary[80];
  }

  /// outline
  get outline() {
    return this.#palettes.neutralVariant[50];
  }
  get outlineVariant() {
    return this.#palettes.neutralVariant[80];
  }

  /// scrim
  get scrim() {
    return this.#palettes.neutral[0];
  }

  /// shadow
  get shadow() {
    return this.#palettes.neutral[0];
  }
}
