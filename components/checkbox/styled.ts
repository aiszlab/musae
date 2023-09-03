import styled from "@emotion/styled";
import type { Theme } from "../theme/types";
import { DEFAULT_THEME } from "../theme/hooks";

export const Wrapper = styled.input(({ theme }) => {
  const primaryColor = (theme as Theme).colors?.primary || DEFAULT_THEME.colors?.primary;

  return {
    margin: 0,
    visibility: "hidden",
    width: "1rem",
    height: "1rem",

    "::before": {
      content: "''",
      visibility: "visible",
      display: "block",
      boxSizing: "border-box",
      width: "1rem",
      height: "1rem",
      borderRadius: "0.2rem",
      borderWidth: "0.1rem",
      borderStyle: "solid",
      borderColor: "gray",
      transition: "all 200ms",
    },

    "&[aria-checked=true]": {
      "::before": {
        backgroundColor: primaryColor,
        borderColor: primaryColor,
      },

      "::after": {
        content: "''",
        visibility: "visible",
        boxSizing: "border-box",
        position: "absolute",
        display: "block",
        width: "0.2rem",
        height: "0.5rem",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        borderColor: "white",
        borderTop: 0,
        borderLeft: 0,
        transform: "translate(200%, -150%) rotate(45deg)",
      },
    },
  };
});
