import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = $create({
  variables: (props: { outlineColor: string }) => ({
    "--color-outline": props.outlineColor,
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
      width: sizes.xxxxxxxxxsmall,
      backgroundColor: "var(--color-outline)",
    },
  },
});

export default styles;
