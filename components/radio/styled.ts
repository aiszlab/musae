import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

export const StyledWrapper = styled.label(() => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",

    "&.musae-radio-wrapper:not(:last-of-type)": {
      marginRight: 8,
    },
  };
});

export const StyledInput = styled.input(({ theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    visibility: "hidden",
    margin: "0 8px",
    height: "1rem",
    width: "1rem",
    cursor: "pointer",

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
        borderColor: validTheme.palettes.primary[40],
      },
    },
  };
});
