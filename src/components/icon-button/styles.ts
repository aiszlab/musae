import { create as $create } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = $create({
  default: {
    ":not(#\\#)": {
      paddingInline: 0,
      paddingBlock: 0,
    },
  },

  xsmall: {
    width: sizes.medium,
    minWidth: sizes.medium,
    height: sizes.medium,
  },

  small: {
    width: sizes.xlarge,
    minWidth: sizes.xlarge,
    height: sizes.xlarge,
  },

  medium: {
    width: sizes.xxxxlarge,
    minWidth: sizes.xxxxlarge,
    height: sizes.xxxxlarge,
  },

  large: {
    width: sizes.xxxxxxxlarge,
    minWidth: sizes.xxxxxxxlarge,
    height: sizes.xxxxxxxlarge,
  },

  xlarge: {
    width: sizes.xxxxxxxxxlarge,
    minWidth: sizes.xxxxxxxxxlarge,
    height: sizes.xxxxxxxxxlarge,
  },
});

export default styles;
