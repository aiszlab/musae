import styled from "@emotion/styled";
import type { ColRenderProps } from "./types";

export const StyledWrapper = styled.div<ColRenderProps>(({ span }) => {
  return {
    gridColumnStart: "auto",
    gridColumnEnd: `span ${span}`,
  };
});
