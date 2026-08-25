import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const slider = $create({
  base: {
    display: "flex",
    flexDirection: "row",
    gap: sizes.xxxxxxxxsmall,
  },
});

const track = $create({
  base: {
    width: "100%",
    height: "100%",
  },

  flexible: {
    flex: 1,
  },

  sized: {
    width: "var(--size)",
  },
});

const handle = $create({
  base: {
    width: sizes.xxxxxxxxxsmall,
    height: sizes.xxlarge,
    borderRadius: sizes.infinity,
    backgroundColor: "var(--color-primary)",
  },
});

const styles = {
  slider,
  track,
  handle,
};

export default styles;
