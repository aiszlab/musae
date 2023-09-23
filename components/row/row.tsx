import React, { useMemo } from "react";
import type { RowProps, RowRenderProps } from "./types";
import { StyledWrapper } from "./styled";

const Row = (props: RowProps) => {
  /// col and row gap in grid
  const gutters = useMemo<RowRenderProps["gutters"]>(() => {
    if (!props.gutter) return [0, 0];
    if (Array.isArray(props.gutter)) return props.gutter;
    return [props.gutter, 0];
  }, [props.gutter]);

  return <StyledWrapper gutters={gutters}>{props.children}</StyledWrapper>;
};

export default Row;
