import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = $create({
  watermark: {
    position: "relative",
    overflow: "hidden",
  },

  marks: {
    width: sizes.full,
    height: sizes.full,
  },
});

export default styles;
