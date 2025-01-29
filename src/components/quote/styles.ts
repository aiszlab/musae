import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  variables: (props: { outlineColor: string }) => ({
    "--outline": props.outlineColor,
  }),

  quote: {
    // reset styles
    margin: spacing.none,

    // apply styles
    position: "relative",
    paddingInlineStart: spacing.medium,

    "::before": {
      content: '""',
      position: "absolute",
      insetBlock: 0,
      insetInlineStart: 0,
      width: sizes.xxxxxxxxsmall,
      backgroundColor: "var(--outline)",
    },
  },
});

export default styles;
