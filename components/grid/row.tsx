import React, { useContext, useMemo } from "react";
import type { RowProps, RowRenderProps } from "./types";
import { StyledRowWrapper } from "./styled";
import { isArray } from "@aiszlab/relax";
import { Context } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";

const Row = (props: RowProps) => {
  /// col and row gap in grid
  const gutters = useMemo<RowRenderProps["gutters"]>(() => {
    if (!props.gutter) return [0, 0];
    if (isArray(props.gutter)) return props.gutter;
    return [props.gutter, 0];
  }, [props.gutter]);

  const classNames = useContext(Context).classNames[ComponentToken.Grid];

  return (
    <StyledRowWrapper
      gutters={gutters}
      justify={props.justify}
      align={props.align}
      className={classNames[GridClassToken.Row]}
    >
      {props.children}
    </StyledRowWrapper>
  );
};

export default Row;
