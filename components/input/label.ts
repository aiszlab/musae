import styled from "@emotion/styled";
import type { LabelProps } from "./types";
import { useValidTheme } from "../theme/hooks";

const Label = styled.legend<LabelProps>(({ isFocused, theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    // typography
    ...validTheme.typography?.body?.small!,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(isFocused && {
      color: validTheme.colors?.primary,
    }),
  };
});

export default Label;
