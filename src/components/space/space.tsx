import React from "react";
import type { SpaceProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";
import clsx from "clsx";

const styles = stylex.create({
  space: (props: { columnGap: number; rowGap: number }) => ({
    display: "flex",
    columnGap: props.columnGap,
    rowGap: props.rowGap,
  }),

  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },

  vertical: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

const Space = ({ gutter = 4, children, className, style, type = "horizontal" }: SpaceProps) => {
  const [columnGap, rowGap] = useGutters({ gutter });
  const styled = stylex.props(
    styles.space({
      columnGap,
      rowGap,
    }),
    styles[type]
  );

  return (
    <div
      className={clsx(className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Space;
