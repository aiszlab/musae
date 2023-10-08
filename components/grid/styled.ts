import styled from "@emotion/styled";
import type { RowRenderProps, ColRenderProps } from "./types";

export const StyledRowWrapper = styled.div<RowRenderProps>(({ gutters, justify, align }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: gutters[0],
    rowGap: gutters[1],
    justifyItems: justify,
    alignItems: align,
  };
});

export const StyledColWrapper = styled.div<ColRenderProps>(({ span }) => {
  return {
    gridColumnStart: "auto",
    gridColumnEnd: `span ${span}`,
  };
});
