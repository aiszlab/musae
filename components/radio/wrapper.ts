import styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

const Wrapper = styled.input(() => {
  const theme = useTheme();

  return {
    visibility: "hidden",
    margin: 0,

    "::after": {
      content: "''",
      display: "block",
      height: "1rem",
      width: "1rem",
      borderWidth: ".1rem",
      borderColor: theme.colors?.primary,
      boxSizing: "border-box",
    },
  };
});

export default Wrapper;
