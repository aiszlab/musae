import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { ButtonRenderProps } from "./types";

export const StyledWrapper = styled.button<ButtonRenderProps>(({ theme, variant, color }) => {
  const _theme = useValidTheme(theme);
  const _primaryColor = _theme.palettes[color][40];

  return {
    borderRadius: 999,
    padding: "0.625rem 1.5rem",

    // filled variant style
    ...(variant === "filled" && {
      backgroundColor: _primaryColor,
      border: "none",

      span: {
        color: _theme.palettes.primary[100],
      },
    }),

    // outlined variant style
    ...(variant === "outlined" && {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: _theme.palettes.neutral[50],

      span: {
        color: _primaryColor,
      },
    }),

    // text variant style
    ...(variant === "text" && {
      span: {
        color: _primaryColor,
      },
    }),
  };
});

/**
 * @author murukal
 *
 * @description
 * content
 */
export const StyledSpan = styled.span(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    marginLeft: 8,
    marginRight: 8,

    /// typography
    ..._theme.typography?.label?.large,
  };
});
