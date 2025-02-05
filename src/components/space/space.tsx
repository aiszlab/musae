import React from "react";
import type { SpaceProps } from "../../types/space";
import stylex from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";
import { stringify } from "@aiszlab/relax/class-name";

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
  gutter = 8,
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
      className={stringify(className, styled.className)}
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
