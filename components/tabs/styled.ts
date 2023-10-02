import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const _StyledTabs = styled.div(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    borderBottomColor: _theme.palettes.neutral[90],
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    position: "relative",
  };
});

export const _StyledIndicator = styled.div(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    height: 2,
    backgroundColor: _theme.palettes.primary[40],
    position: "absolute",
    bottom: 0,
  };
});
