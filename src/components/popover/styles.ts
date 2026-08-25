import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const popover = $create({
  base: {
    maxWidth: "100vw",

    // layout
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
  },

  padding: {
    padding: `var(--padding, ${spacing.medium})`,
  },
});

const virtual = $create({
  base: {
    width: "fit-content",
    height: "fit-content",
  },
});

const styles = { popover, virtual };

export default styles;
