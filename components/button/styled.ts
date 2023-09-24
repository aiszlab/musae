import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { ButtonRenderProps } from "./types";

export const StyledWrapper = styled.button<ButtonRenderProps>(({ theme, variant }) => {
  const validTheme = useValidTheme(theme);

  return {
    borderRadius: 999,
    padding: "0.625rem 1.5rem",

    // filled variant style
    ...(variant === "filled" && {
      backgroundColor: validTheme.palettes?.primary[40],
      border: "none",

      span: {
        color: validTheme.palettes?.primary[100],
      },
    }),

    // outlined variant style
    ...(variant === "outlined" && {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: validTheme.palettes?.neutral[50],

      span: {
        color: validTheme.palettes?.primary[40],
      },
    }),

    // elevated variant style
    ...(variant === "elevated" && {
      backgroundColor: validTheme.palettes?.neutral[95],
      boxShadow: validTheme.elevations?.[1].boxShadow,

      span: {
        color: validTheme.palettes?.primary[40],
      },
    }),

    // tonal variant style
    ...(variant === "tonal" && {
      backgroundColor: validTheme.palettes?.secondary[90],

      span: {
        color: validTheme.palettes?.secondary[10],
      },
    }),

    // text variant style
    ...(variant === "text" && {
      span: {
        color: validTheme.palettes?.primary[40],
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
  const validTheme = useValidTheme(theme);

  return {
    marginLeft: 8,
    marginRight: 8,

    /// typography
    ...validTheme.typography?.label?.large,
  };
});
