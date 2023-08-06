import styled from "@emotion/styled";
import type { WrapperProps } from "./types";

const Wrapper = styled.div<WrapperProps>((props) => {
  const { isFocused, hasLabel, isNotEmpty } = props;

  return {
    display: "flex",
    alignItems: "center",
    height: 56,

    position: "relative",

    // after style
    "::after": {
      content: '""',
      width: "100%",
      height: "100%",
      position: "absolute",

      borderStyle: "solid",
      borderRadius: 4,
      borderColor: "#79747e",
      borderWidth: 1,

      // if there is label
      // when input has value or has placeholder
      // wrapper always split the border
      clipPath:
        hasLabel && (isFocused || isNotEmpty)
          ? "polygon(0 0, 10px 0, 10px 2px, 20px 2px, 20px 0, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0 0, 10px 0, 10px 2px, 10px 2px, 10px 0, 100% 0, 100% 100%, 0 100%)",

      // if input is focused
      // wrapper border must be highlight
      ...(isFocused && {
        borderColor: "#6750a4",
        borderWidth: 2,
      }),
    },
  };
});

export default Wrapper;
