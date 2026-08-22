import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";

const styles = $create({
  checkbox: {
    position: "absolute",
    insetInlineStart: sizes.none,
    insetBlockStart: sizes.none,
    display: "flex",
    padding: spacing.smallest,
  },
});

export default styles;
