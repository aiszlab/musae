import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = $create({
  hidden: {
    width: sizes.smallest,
    height: sizes.smallest,
    margin: spacing.smallest,
    position: "absolute",
    clip: "rect(0, 0, 0, 0)",
    overflow: "hidden",
  },
});

export default styles;
