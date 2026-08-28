import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const select = $create({
  pickable: {
    padding: spacing.xxxxxsmall,
  },
});

const selector = $create({
  input: {
    gap: spacing.xxxxxsmall,
    flexWrap: "wrap",
  },
});

const styles = {
  select,
  selector,
};

export default styles;
