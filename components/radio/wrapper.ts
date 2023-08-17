import styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

const Wrapper = styled.input(() => {
  const theme = useTheme();

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
        borderColor: theme.colors?.primary,
      },
    },
  };
});

export default Wrapper;
