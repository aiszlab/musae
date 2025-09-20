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
  const theme = useTheme();

  return useMemo(() => {
    return tokens.reduce<Partial<Record<ThemeColorVarToken, string>>>((prev, _tokenOrPair) => {
      const [_token, _opacity] = toArray(_tokenOrPair) as [ColorRole, number | undefined];
      const _color = theme.colors[_token];

      // 透明度特殊逻辑
      if (isUndefined(_opacity)) {
        prev[`--color-${_token}`] = _color;
      } else {
        prev[`--color-${_token}-opacity-${(_opacity * 100).toString().padStart(2, "0")}`] =
          hexToRgba(_color, _opacity).toString();
      }

      return prev;
    }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens.toString(), theme.colors]);
};
