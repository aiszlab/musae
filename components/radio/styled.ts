import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const Wrapper = styled.input(({ theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    visibility: "hidden",
    margin: 0,
    height: "1rem",
    width: "1rem",

    "::after": {
      content: "''",
      visibility: "visible",
      display: "block",
      height: "1rem",
      width: "1rem",
      boxSizing: "border-box",
      borderWidth: "0.1rem",
      borderStyle: "solid",
      borderColor: "gray",
      borderRadius: 999,
      transition: "all 200ms",
    },

    "&[aria-checked=true]": {
      "::after": {
        borderWidth: "0.3rem",
        borderColor: validTheme.palettes?.primary[40],
      },
    },
  };
});
