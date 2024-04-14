import React from "react";
import type { SpaceProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";

const styles = stylex.create({
  space: (props: { columnGap: number; rowGap: number }) => ({
    display: "flex",
    flexDirection: "row",
    columnGap: props.columnGap,
    rowGap: props.rowGap,
    alignItems: "center",
  }),
});

const Space = ({ gutter = [4, 4], children }: SpaceProps) => {
  const [columnGap, rowGap] = useGutters({ gutter });
  const styled = stylex.props(
    styles.space({
      columnGap,
      rowGap,
    })
  );

  return (
    <div className={styled.className} style={styled.style}>
      {children}
    </div>
  );
};

export default Space;
