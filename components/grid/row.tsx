import React, { useMemo } from "react";
import type { RowProps, RowRenderProps } from "./types";
import { StyledRowWrapper } from "./styled";
import { isArray } from "@aiszlab/relax";

const Row = (props: RowProps) => {
  /// col and row gap in grid
  const gutters = useMemo<RowRenderProps["gutters"]>(() => {
    if (!props.gutter) return [0, 0];
    if (isArray(props.gutter)) return props.gutter;
    return [props.gutter, 0];
  }, [props.gutter]);

  return (
    <StyledRowWrapper gutters={gutters} justify={props.justify} align={props.align} className="musae-row">
      {props.children}
    </StyledRowWrapper>
  );
};

export default Row;
