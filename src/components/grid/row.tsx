import React from "react";
import type { RowProps } from "../../types/grid";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";
import { CLASS_NAMES, Context } from "./context";

const styles = $create({
  row: (props: {
    columnGap: number;
    rowGap: number;
    justify: RowProps["justify"];
    align: RowProps["align"];
  }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(24, minmax(0, 1fr))",
    columnGap: props.columnGap,
    rowGap: props.rowGap,
    justifyItems: props.justify,
    alignItems: props.align,
  }),
});

const Row = ({
  align,
  children,
  gutter = 0,
  justify,
  className,
  as: As = "div",
  style,
}: RowProps) => {
  // col and row gap in grid
  const [columnGap, rowGap] = useGutters({ gutter });
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(styles.row({ columnGap, rowGap, justify, align }));

  return (
    <Context.Provider value={{ classNames }}>
      <As
        className={stringify(classNames.row, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
        }}
      >
        {children}
      </As>
    </Context.Provider>
  );
};

export default Row;
