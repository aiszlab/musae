import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  guideline: {
    display: "inline-flex",
    flexDirection: "column",
  },

  figure: {
    borderStartStartRadius: sizes.xxxxsmall,
    borderStartEndRadius: sizes.xxxxsmall,
    borderEndStartRadius: sizes.xxxxxxxxxxsmall,
    borderEndEndRadius: sizes.xxxxxxxxxxsmall,
  },

  label: {
    marginBlockStart: spacing.xxxxxsmall,
    backgroundColor: "var(--color-error)",
    borderStartStartRadius: sizes.xxxxxxxxxxsmall,
    borderStartEndRadius: sizes.xxxxxxxxxxsmall,
    borderEndStartRadius: sizes.xxxxsmall,
    borderEndEndRadius: sizes.xxxxsmall,
  },

  recommend: {
    backgroundColor: "var(--color-success)",
  },

  caption: {
    marginBlockStart: spacing.xxsmall,
    marginInline: spacing.xxsmall,
    paddingBlock: spacing.large,
    paddingInline: spacing.xxxxxxsmall,
  },
});

export default styles;
