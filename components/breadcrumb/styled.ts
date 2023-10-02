import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const StyledNav = styled.nav(({ theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    color: validTheme.palettes.neutral[30],

    // typography
    ...validTheme.typography.label.large,

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
            color: validTheme.palettes.neutral[10],
            backgroundColor: validTheme.palettes.neutral[95],
          },
        },

        ":last-of-type": {
          color: validTheme.palettes.neutral[10],
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
