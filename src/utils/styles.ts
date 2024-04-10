import { type CSSProperties } from "react";
import { type StyleXStyles, props as toStyleProps } from "@stylexjs/stylex";
import { isArray } from "@aiszlab/relax";
import { type ComponentProps } from "../types/element";
import clsx from "clsx";
import type { CompiledStyles, InlineStyles, StyleXArray } from "@stylexjs/stylex/lib/StyleXTypes";

/**
 * @description
 * stylex props always return a class name like string
 * in some case, i usally need an array of class names
 */
export const toClassList = (className: string = "") => {
  return className.split(" ");
};

/**
 * @description
 * check current style is stylex styles
 */
export const isStyleXStyles = (style: CSSProperties | StyleXStyles | undefined): style is StyleXStyles => {
  // @ts-ignore
  return !!style && (isArray(style) || !!style.$$css);
};

/**
 * @description
 * to styled by using stylex props
 */
export const toStyled = (
  { className, style }: ComponentProps = {},
  ...styles: ReadonlyArray<
    StyleXArray<(null | undefined | CompiledStyles) | boolean | Readonly<[CompiledStyles, InlineStyles]>>
  >
) => {
  const _isStyleXStyles = isStyleXStyles(style);
  const _styled = toStyleProps(...styles, _isStyleXStyles && style);

  return {
    className: clsx(className, _styled.className),
    style: {
      ..._styled.style,
      ...(!_isStyleXStyles && style),
    },
  };
};
