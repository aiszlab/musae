import styled from "@emotion/styled";
import type { RowRenderProps } from "./types";

export const StyledWrapper = styled.div<RowRenderProps>(({ gutters, justify, align }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: gutters[0],
    rowGap: gutters[0],
    justifyItems: justify,
    alignItems: align,
  };
});
