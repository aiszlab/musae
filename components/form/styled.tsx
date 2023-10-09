import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

/**
 * @description
 * styled help wrapper
 */
export const StyledHelpWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

/**
 * @description
 * styled error wrapper
 */
export const StyledErrorWrapper = styled.span(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    color: _theme.palettes.error[40],
    ..._theme.typography.body.small,
  };
});
