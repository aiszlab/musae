import styled from "@emotion/styled";
import type { PopperRenderProps } from "./types";

export const Wrapper = styled.div<PopperRenderProps>(({ isVisible }) => {
  return {
    display: !isVisible ? "none" : void 0,
  };
});
