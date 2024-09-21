import React from "react";
import type { SpaceProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";
import { clsx } from "@aiszlab/relax";

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

const Space = ({
  gutter = 4,
  children,
  className,
  style,
  orientation = "horizontal",
}: SpaceProps) => {
  const [columnGap, rowGap] = useGutters({ gutter });
  const styled = stylex.props(
    styles.space({
      columnGap,
      rowGap,
    }),
    styles[orientation],
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
