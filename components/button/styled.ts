import styled from "@emotion/styled";
import { useValidTheme } from "../theme";
import type { ButtonRenderProps } from "./types";

export const StyledWrapper = styled.button<ButtonRenderProps>(({ variant, color, ...props }) => {
  const theme = useValidTheme(props.theme);

  return {
    borderRadius: 999,
    padding: "0.625rem 1.5rem",

    // filled variant style
    ...(variant === "filled" && {
      backgroundColor: theme.colorRole.primary,
      border: "none",

      span: {
        color: theme.colorRole.onPrimary,
      },
    }),

    // outlined variant style
    ...(variant === "outlined" && {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.colorRole.outline,

      span: {
        color: theme.colorRole.primary,
      },
    }),

    // text variant style
    ...(variant === "text" && {
      span: {
        color: theme.colorRole.primary,
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
export const StyledSpan = styled.span((props) => {
  const theme = useValidTheme(props.theme);

  return {
    marginLeft: 8,
    marginRight: 8,
    whiteSpace: "nowrap",

    /// typography
    ...theme.typography.label.large,
  };
});
