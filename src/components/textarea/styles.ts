import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const textarea = $create({
  default: {
    // reset
    paddingBlock: null,
    paddingInline: null,
    width: sizes.full,
    overflow: "hidden",
  },

  unbordered: {
    boxShadow: "none",
  },
});

const input = $create({
  default: {
    height: sizes.full,
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.medium,
    flex: 1,
    backgroundColor: "transparent",
    resize: "none",
    borderStyle: "none",
    outline: "none",
  },

  resizable: {
    resize: null,
  },
});

const styles = { textarea, input };

export default styles;
