import { create as $create } from "@stylexjs/stylex";

const col = $create({
  base: {
    flex: "0 0 var(--span)",
    maxWidth: "var(--span)",
  },
});

const row = $create({
  base: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "var(--column-gap)",
    rowGap: "var(--row-gap)",
    justifyItems: "var(--justify)",
    alignItems: "var(--align)",
  },
});

const styles = {
  col,
  row,
};

export default styles;
