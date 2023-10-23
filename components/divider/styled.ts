import styled from "@emotion/styled";
import type { DividerRenderProps } from "./types";

export const StyledWrapper = styled.div<DividerRenderProps>(({ hasChildren }) => {
  if (!hasChildren) {
    return {
      marginBlock: 16,
      borderTop: "1px solid rgba(5, 5, 5, 0.06)",
    };
  }

  return {
    display: "flex",
    flexDirection: "row",

    ":before": {
      width: "50%",
      content: "''",
    },

    ":after": {
      width: "50%",
      content: "''",
    },
  };
});
