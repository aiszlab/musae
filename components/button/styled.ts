import styled from "@emotion/styled";
import type { Theme } from "../theme/types";
import { DEFAULT_THEME } from "../theme/hooks";

export const Wrapper = styled.button(({ theme }) => {
  return {
    borderRadius: 999,
    padding: "10px 16px",
    backgroundColor: (theme as Theme).colors?.primary || DEFAULT_THEME.colors?.primary,
    border: "none",
  };
});
