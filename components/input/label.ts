import styled from "@emotion/styled";
import type { LabelProps } from "./types";
import { useThemeWithPreset } from "../theme/hooks";

const Label = styled.legend<LabelProps>(({ isFocused, theme }) => {
  const themeWithPreset = useThemeWithPreset(theme);

  return {
    // typography
    ...themeWithPreset.typography?.body?.small!,

    // layout
    paddingInlineStart: 4,
    paddingInlineEnd: 4,

    // if input is focused
    ...(isFocused && {
      color: themeWithPreset.colors?.primary,
    }),
  };
});

export default Label;
