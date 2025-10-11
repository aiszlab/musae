import { useMemo } from "react";
import { useTheme } from "../components/theme";
import { type ColorRole } from "../utils/color-role";
import { isUndefined, toArray } from "@aiszlab/relax";
import { hexToRgba } from "@aiszlab/fuzzy/color";

type ThemeColorVarToken = `--color-${ColorRole}` | `--color-${ColorRole}-opacity-${string}`;

export type ThemeColorVariable = `var(${ThemeColorVarToken})`;

/**
 * @description 主题色样式变量
 */
export const useThemeColorVars = (tokens: (ColorRole | [ColorRole, number])[]) => {
  const { colors } = useTheme();

  return useMemo(() => {
    return tokens.reduce<Partial<Record<ThemeColorVarToken, string>>>((prev, tokenOrPair) => {
      const [token, opacity] = toArray(tokenOrPair) as [ColorRole, number | undefined];
      const color = colors[token];

      // 透明度特殊逻辑
      if (isUndefined(opacity)) {
        prev[`--color-${token}`] = color;
      } else {
        prev[`--color-${token}-opacity-${(opacity * 100).toString().padStart(2, "0")}`] =
          // 透明度场景下页面渲染统一使用`rgba`格式
          hexToRgba(color, opacity).toString();
      }

      return prev;
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens.toString(), colors]);
};
