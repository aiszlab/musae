import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

/**
 * @description
 * styled help wrapper
 */
export const StyledSupportingText = styled.div(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    display: "flex",
    flexDirection: "column",

    span: {
      ..._theme.typography.body.small,
      padding: "4px 16px 0 16px",
    },

    ".musae-form-item-explain-error": {
      color: _theme.palettes.error[40],
    },
  };
});

/**
 * @description
 * styled label
 */
export const StyledLabel = styled.span(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    ..._theme.typography.label.small,
  };
});

/**
 * @description
 * styled form
 */
export const StyledForm = styled.form({
  width: "100%",
});
