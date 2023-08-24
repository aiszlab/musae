import styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

export const Wrapper = styled.button(() => {
  const theme = useTheme();

  return {
    borderRadius: 999,
    padding: "10px 16px",
    backgroundColor: theme.colors?.primary,
    border: "none",
  };
});
