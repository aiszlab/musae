import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const loading = $create({
  base: {
    padding: spacing.medium,
  },

  heading: {
    width: sizes.xxxxxxxxlarge,
    height: sizes.medium,
    borderRadius: sizes.xxxxxxxsmall,
  },

  content: {
    width: 600,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxxxsmall,
  },

  newline: {
    width: sizes.xxxxxxxxxxlarge,
    height: sizes.xsmall,
    borderRadius: sizes.xxxxxxxsmall,
  },

  footer: {
    width: sizes.xxxxxxxxlarge,
    height: sizes.small,
    borderRadius: sizes.xxxxxxxsmall,
  },
});

const markdown = $create({
  base: {
    width: "fit-content",
    overflow: "auto",
    minWidth: "100%",

    // use higher selector
    ":not(#\\#) pre": {
      padding: spacing.medium,
    },
  },
});

const styles = {
  loading,
  markdown,
};

export default styles;
