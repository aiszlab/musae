import styled from "@emotion/styled";
import type { PopupRenderProps } from "./types";

export const StyledPopup = styled.div<PopupRenderProps>(({ isVisible }) => {
  return {
    display: !isVisible ? "none" : void 0,
  };
});
