import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const form = $create({
  default: {},

  inline: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    columnGap: spacing.large,
  },
});

const styles = {
  form,
};

export default styles;
