import styled from "@emotion/styled";
import type { LabelRenderProps, WrapperRenderProps } from "./types";
import { useValidTheme } from "../theme/hooks";

export const StyledWrapper = styled.fieldset<WrapperRenderProps>(({ focused, invalid, theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    textAlign: "start",
    height: 56,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    alignItems: "center",
    borderColor: validTheme.palettes.neutral[50],
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    boxSizing: "border-box",
    transition: "all 100ms",

    // if input is focused, change the border
    ...(focused && {
      borderColor: validTheme.palettes.primary[40],
      borderWidth: 2,
    }),

    // if is invalid, display as error
    ...(invalid && {
      borderColor: validTheme.palettes.error[40],
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
    flex: 1,
  };
});

export const StyledLabel = styled.legend<LabelRenderProps>(({ focused, theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    // typography
    ...validTheme.typography?.body?.small!,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(focused && {
      color: validTheme.palettes.primary[40],
    }),
  };
});
