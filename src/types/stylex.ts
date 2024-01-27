import type { CompiledStyles, InlineStyles, StyleXArray } from "@stylexjs/stylex/lib/StyleXTypes";

/**
 * @description
 * props
 */
export type Styles = ReadonlyArray<
  StyleXArray<(null | undefined | CompiledStyles) | boolean | Readonly<[CompiledStyles, InlineStyles]>>
>;
