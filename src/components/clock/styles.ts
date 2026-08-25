import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const column = $create({
  menu: {
    overflowX: "hidden",
    overflowY: {
      default: "hidden",
      ":hover": {
        "@media (hover: hover)": "auto",
      },
    },

    width: sizes.xxxlarge,
    marginBlock: spacing.xxxxxsmall,
  },

  item: {
    width: sizes.xxxlarge,
    display: "flex",
    justifyContent: "center",
  },
});

const clock = $create({
  base: {
    display: "flex",
    height: 200,
    columnGap: spacing.xxxxxsmall,
  },
});

const styles = {
  column,
  clock,
};

export default styles;
