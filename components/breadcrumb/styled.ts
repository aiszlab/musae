import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const StyledNav = styled.nav(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    color: _theme.palettes.neutral[30],

    // typography
    ..._theme.typography.label.large,

    ol: {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",

      "li:not([role=separator])": {
        a: {
          padding: "0 4px",
          transition: "all 200ms",
          borderRadius: 4,

          ":hover": {
            color: _theme.palettes.neutral[10],
            backgroundColor: _theme.palettes.neutral[95],
          },
        },

        ":last-of-type": {
          color: _theme.palettes.neutral[10],
        },
      },
    },
  };
});

export const StyledSeparator = styled.li(() => {
  return {
    margin: "0 0.5rem",
  };
});
