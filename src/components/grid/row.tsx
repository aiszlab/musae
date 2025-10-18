import React from "react";
import type { RowProps } from "../../types/grid";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useGutters } from "../../hooks/use-gutters";
import { CLASS_NAMES, Context } from "./context";

const styles = $create({
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "var(--column-gap)",
    rowGap: "var(--row-gap)",
    justifyItems: "var(--justify)",
    alignItems: "var(--align)",
  },
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
  const [columnGap, rowGap] = useGutters({ gutter });
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props(styles.row);

  return (
    <Context.Provider value={{ classNames }}>
      <As
        className={stringify(classNames.row, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
          "--column-gap": `${columnGap}px`,
          "--row-gap": `${rowGap}px`,
          "--justify": justify,
          "--align": align,
        }}
      >
        {children}
      </As>
    </Context.Provider>
  );
};

export default Row;
