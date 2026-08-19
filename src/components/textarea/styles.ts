import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  textarea: $create({
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
  }),

  input: $create({
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
  }),
};

export default styles;
