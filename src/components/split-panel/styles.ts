import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const splitPanel = $create({
  base: {
    width: sizes.full,
    height: sizes.full,
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "stretch",
    boxSizing: "border-box",
    margin: spacing.none,
    padding: spacing.none,
  },

  horizontal: {
    flexDirection: "row",
  },

  vertical: {
    flexDirection: "column",
  },
});
const divider = $create({
  base: {
    position: "relative",
  },

  horizontal: {
    width: sizes.none,
  },

  vertical: {
    height: sizes.none,
  },
});

const dragger = $create({
  base: {
    position: "absolute",

    "::before": {
      content: "''",
      display: "block",
      position: "absolute",
      backgroundColor: "var(--color-outline-variant)",
    },

    "::after": {
      content: "''",
      display: "block",
      position: "absolute",
      backgroundColor: "var(--color-outline)",
      insetInlineStart: sizes.half,
      insetBlockStart: sizes.half,
      transform: "translate(-50%, -50%)",
    },
  },

  horizontal: {
    width: sizes.xxxxxxxsmall,
    height: sizes.full,
    cursor: "col-resize",
    insetInlineStart: sizes.half,
    transform: "translateX(-50%)",

    "::before": {
      width: sizes.xxxxxxxxxxsmall,
      height: sizes.full,
      insetInlineStart: sizes.half,
      transform: "translateX(-50%)",
    },

    "::after": {
      width: sizes.xxxxxxxxxxsmall,
      height: sizes.xxsmall,
    },
  },

  vertical: {
    width: sizes.full,
    height: sizes.xxxxxxxsmall,
    cursor: "row-resize",
    insetBlockStart: sizes.half,
    transform: "translateY(-50%)",

    "::before": {
      width: sizes.full,
      height: sizes.xxxxxxxxxxsmall,
      insetBlockStart: sizes.half,
      transform: "translateY(-50%)",
    },

    "::after": {
      width: sizes.xxsmall,
      height: sizes.xxxxxxxxxxsmall,
    },
  },
});

const panel = $create({
  base: {
    flexGrow: 0,
    userSelect: "none",
    overflow: "hidden",
  },

  unsized: {
    flexBasis: "calc(var(--unsized-item-space) + var(--offset))",
  },

  sized: {
    flexBasis: "calc(var(--item-space) + var(--offset))",
  },

  last: {
    flexBasis: "0%",
    flexGrow: 1,
  },
});

const styles = {
  splitPanel,
  divider,
  dragger,
  panel,
};

export default styles;
