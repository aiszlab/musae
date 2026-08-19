import { create as $create } from "@stylexjs/stylex";

const styles = $create({
  space: {
    display: "flex",
    columnGap: "var(--column-gap)",
    rowGap: "var(--row-gap)",
  },

  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },

  vertical: {
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default styles;
