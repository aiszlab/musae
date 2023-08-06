import styled from "@emotion/styled";
import type { WrapperProps } from "./types";

const Wrapper = styled.div<WrapperProps>(({ isVisible }) => {
  return {
    display: !isVisible ? "none" : void 0,
  };
});

export default Wrapper;
