import styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

const Wrapper = styled.div(() => {
  const theme = useTheme();

  return {
    width: "1.8rem",
    height: "1rem",
    borderRadius: "1rem",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "gray",
    backgroundColor: "transparent",
    transition: "all 200ms",

    ":before": {
      content: "''",
      display: "block",
      margin: "0.1rem",
      height: "0.8rem",
      width: "0.8rem",
      borderRadius: 999,
      backgroundColor: "black",
      transition: "all 200ms",
    },

    "&[aria-selected='true']": {
      borderColor: theme.colors?.primary,
      backgroundColor: theme.colors?.primary,

      ":before": {
        translate: "100%",
        backgroundColor: "white",
      },
    },
  };
});

export default Wrapper;
