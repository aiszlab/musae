import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = {
  popover: $create({
    default: {
      maxWidth: "100vw",

      // layout
      display: "flex",
      flexDirection: "column",
      gap: spacing.xxsmall,
    },

    padding: {
      padding: `var(--padding, ${spacing.medium})`,
    },
  }),

  virtual: $create({
    default: {
      width: "fit-content",
      height: "fit-content",
    },
  }),
};

export default styles;
