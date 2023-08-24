import styled from "@emotion/styled";
import type { WrapperProps } from "./types";
import { useTheme } from "../theme/hooks";

export const Wrapper = styled.fieldset<WrapperProps>(({ isFocused }) => {
  const theme = useTheme();

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
      borderColor: theme.colors?.primary,
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
