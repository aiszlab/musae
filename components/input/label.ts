import styled from "@emotion/styled";
import type { LabelProps } from "./types";
import { useTheme } from "../theme/hooks";

const Label = styled.legend<LabelProps>(({ isFocused }) => {
  const theme = useTheme();

  return {
    // typography
    ...theme.typography?.body?.small!,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(isFocused && {
      color: theme.colors?.primary,
    }),
  };
});

export default Label;
