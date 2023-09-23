import styled from "@emotion/styled";
import { RowRenderProps } from "./types";

export const StyledWrapper = styled.div<RowRenderProps>(({ gutters }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: gutters[0],
    rowGap: gutters[0],
  };
});
