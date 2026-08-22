import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../../../theme/tokens.stylex";

const styles = $create({
  default: {
    minHeight: sizes.medium,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: spacing.xxxxxsmall,
    borderBottomWidth: sizes.smallest,
    borderBottomColor: "var(--color-outline-variant)",
    borderBottomStyle: "solid",
    overflow: "auto",

    padding: spacing.xxxsmall,
  },
});

export default styles;
