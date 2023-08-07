import styled from "@emotion/styled";
import type { StyledInputProps } from "./types";

const StyledInput = styled.input<StyledInputProps>(({ hasPrefix }) => {
  return {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: hasPrefix ? 0 : 16,
    paddingRight: 0,
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
  };
});

export default StyledInput;
