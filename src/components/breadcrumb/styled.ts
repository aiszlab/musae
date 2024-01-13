import styled from "@emotion/styled";
import { useValidTheme } from "../theme";

export const StyledNav = styled.nav((props) => {
  const theme = useValidTheme(props.theme);

  return {
    color: theme.colorRole.onSurfaceVariant,

    // typography
    ...theme.typography.label.large,

    ol: {
      listStyle: "none",
      display: "flex",
      flexWrap: "wrap",

      "li:not([role=separator])": {
        a: {
          padding: "0 4px",
          transition: "all 200ms",
          borderRadius: 4,

          // when hover, use deeper color
          ":hover": {
            color: theme.colorRole.onSurface,
            backgroundColor: theme.colorRole.surface,
          },
        },

        // the last li, use deeper color
        ":last-of-type": {
          color: theme.colorRole.onSurface,
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
