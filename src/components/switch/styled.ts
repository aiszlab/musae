import styled from "@emotion/styled";
import { useValidTheme } from "../theme";

export const Wrapper = styled.div((props) => {
  const theme = useValidTheme(props.theme);

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
      borderColor: theme.colorRole.primary,
      backgroundColor: theme.colorRole.primary,

      "::before": {
        translate: "100%",
        backgroundColor: theme.colorRole.surfaceContainerLowest,
      },
    },
  };
});
