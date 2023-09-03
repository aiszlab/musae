import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const Wrapper = styled.button(({ theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    borderRadius: 999,
    padding: "10px 16px",
    backgroundColor: validTheme.colors?.primary,
    border: "none",
  };
});
