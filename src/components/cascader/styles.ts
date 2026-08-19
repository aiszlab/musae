import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = $create({
  options: {
    display: "flex",
    columnGap: spacing.xxxxxsmall,
    marginInline: spacing.xxxxxsmall,
  },
});

export default styles;
