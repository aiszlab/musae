import styled from "@emotion/styled";
import type { WrapperProps } from "./types";
import { useValidTheme } from "../theme/hooks";

export const Wrapper = styled.fieldset<WrapperProps>(({ isFocused, theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    textAlign: "start",
    height: 56,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    alignItems: "center",
    borderColor: "#79747e",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    boxSizing: "border-box",

    // if input is focused, change the border
    ...(isFocused && {
      borderColor: validTheme.colors?.primary,
      borderWidth: 2,
    }),
  };
});

export const StyledInput = styled.input(() => {
  return {
    padding: 0,
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    height: "auto",
  };
});
