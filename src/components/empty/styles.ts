import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = $create({
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBlock: spacing.xxxxxxlarge,
    marginInline: spacing.xxsmall,
  },

  label: {
    marginBlockStart: spacing.xxsmall,
  },
});

export default styles;
