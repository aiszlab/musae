import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const styles = $create({
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
      width: sizes.xxxxxxxxxxsmall,
      backgroundColor: "var(--color-outline)" satisfies ThemeColorVariable,
    },
  },
});

export default styles;
