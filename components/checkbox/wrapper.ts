import styled from "@emotion/styled";

const Wrapper = styled.input(() => {
  return {
    margin: 0,
    visibility: "hidden",

    "::before": {
      content: "''",
      visibility: "visible",
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "blue",
      borderRadius: "0.2rem",
    },

    "::after": {
      content: "''",
      visibility: "visible",
      boxSizing: "border-box",
      position: "absolute",
      display: "block",
      width: "0.2rem",
      height: "0.4rem",
      borderWidth: "0.1rem",
      borderStyle: "solid",
      borderColor: "white",
      borderTop: 0,
      borderLeft: 0,

      transform: "translate(200%, -0.7rem) rotate(45deg)",
    },
  };
});

export default Wrapper;
