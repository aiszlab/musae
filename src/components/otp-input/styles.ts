import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = $create({
  otp: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxsmall,
  },

  input: {
    ":not(#\\#)": {
      width: `calc(1ch + ${spacing.medium} * 2)`,
    },
  },
});

export default styles;
