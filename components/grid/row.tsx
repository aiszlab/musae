import React, { useMemo } from "react";
import type { Gutters, RowProps } from "./types";
import { isArray } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useRowStyle } from "./hooks";

const Row = ({ align, children, gutter, justify, className, ...props }: RowProps) => {
  /// col and row gap in grid
  const gutters = useMemo<Gutters>(() => {
    if (!gutter) return [0, 0];
    if (isArray(gutter)) return gutter;
    return [gutter, 0];
  }, [gutter]);

  const classNames = useClassNames(ComponentToken.Grid);

  const style = useRowStyle([gutters, justify, align, props.style]);

  return (
    <div style={style} className={clsx([classNames[GridClassToken.Row], className])}>
      {children}
    </div>
  );
};

export default Row;
