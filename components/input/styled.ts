import styled from "@emotion/styled";
import type { LabelRenderProps, WrapperProps } from "./types";
import { useValidTheme } from "../theme/hooks";

export const StyledWrapper = styled.fieldset<WrapperProps>(({ isFocused, theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    textAlign: "start",
    height: 56,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    alignItems: "center",
    borderColor: validTheme.palettes?.neutral[50],
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    boxSizing: "border-box",

    // if input is focused, change the border
    ...(isFocused && {
      borderColor: validTheme.palettes?.primary[40],
      borderWidth: 2,
    }),
  };
});

export const StyledInput = styled.input(() => {
  return {
    padding: "0 0.75rem",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    height: "auto",
  };
});

export const StyledLabel = styled.legend<LabelRenderProps>(({ isFocused, theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    // typography
    ...validTheme.typography?.body?.small!,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(isFocused && {
      color: validTheme.palettes?.primary[40],
    }),
  };
});
