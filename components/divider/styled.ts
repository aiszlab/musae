import styled from "@emotion/styled";
import type { DividerRenderProps } from "./types";

export const StyledWrapper = styled.div<DividerRenderProps>(({ hasChildren }) => {
  if (!hasChildren) {
    return {
      margin: "1.5rem 0",
      borderBlockStart: "1px solid rgba(5, 5, 5, 0.06)",
    };
  }

  return {};
});
