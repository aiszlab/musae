import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const StyledTabs = styled.div((props) => {
  const theme = useValidTheme(props.theme);

  return {
    borderBottomColor: theme.colorRole.outline,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    position: "relative",
  };
});

export const StyledIndicator = styled.div((props) => {
  const theme = useValidTheme(props.theme);

  return {
    height: 2,
    backgroundColor: theme.colorRole.primary,
    position: "absolute",
    bottom: 0,
  };
});
