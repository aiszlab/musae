import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const Wrapper = styled.div(({ theme }) => {
  const _theme = useValidTheme(theme);

  return {
    width: "1.8rem",
    height: "1rem",
    borderRadius: "1rem",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "gray",
    backgroundColor: "transparent",
    transition: "all .2s",

    "::before": {
      content: "''",
      display: "block",
      margin: "0.1rem",
      height: "0.8rem",
      width: "0.8rem",
      borderRadius: 999,
      backgroundColor: "black",
      transition: "all .2s",
    },

    "&[aria-selected=true]": {
      borderColor: _theme.palettes.primary[40],
      backgroundColor: _theme.palettes.primary[40],

      "::before": {
        translate: "100%",
        backgroundColor: "white",
      },
    },
  };
});
