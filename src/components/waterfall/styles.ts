import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const waterfall = $create({
  base: {
    width: sizes.full,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    height: "fit-content",
    columnGap: "var(--column-gap)",
    rowGap: "var(--row-gap)",
    overflow: "hidden",
  },

  repainted: {
    flexDirection: "column",
    height: "var(--max-height)",
  },

  item: {
    order: "var(--order)",
    width: `calc((100% - (var(--columns) - 1) * var(--column-gap)) / var(--columns))`,
    height: "fit-content",
  },
});

const sequential = $create({
  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    rowGap: "var(--row-gap)",
    overflow: "auto",
  },
});

const styles = {
  waterfall,
  sequential,
};

export default styles;
