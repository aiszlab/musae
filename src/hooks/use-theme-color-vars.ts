import { useMemo } from "react";
import { useTheme } from "../components/theme";
import { type ColorRole } from "../utils/color-role";
import { isUndefined, toArray } from "@aiszlab/relax";
import { type Opacity } from "../components/theme/tokens.stylex";

type ThemeColorVarToken = `--color-${ColorRole}` | `--color-${ColorRole}-opacity-${string}`;

export type ThemeColorVariable = `var(${ThemeColorVarToken})`;

/**
 * @description 主题色样式变量
 */
export const useThemeColorVars = (tokens: (ColorRole | [ColorRole, Opacity])[]) => {
  const { colors } = useTheme();

  return useMemo(() => {
    return tokens.reduce<Partial<Record<ThemeColorVarToken, string>>>((prev, tokenOrPair) => {
      const [token, opacity] = toArray(tokenOrPair) as [ColorRole, number | undefined];
      const color = colors[token];
      const colorVar = `--color-${token}` as const;

      // 指定透明度时，创建原颜色变量后，基于原颜色变量创建透明度变量
      prev[colorVar] = color;

      if (!isUndefined(opacity) && opacity < 1) {
        const _opacity = (opacity * 100).toString().padStart(2, "0");

        prev[`--color-${token}-opacity-${_opacity}`] =
          `color-mix(in srgb, var(${colorVar}) ${_opacity}%, transparent)`;
      }

      return prev;
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens.toString(), colors]);
};
