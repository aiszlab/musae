import { create as $create } from "@stylexjs/stylex";
import { spacing, sizes } from "../../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../../hooks/use-theme-color-vars";

const root = {
  item: $create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.xxsmall,
    },
  }),

  filename: $create({
    default: {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),
};

const picture = $create({
  default: {
    width: sizes.xxxxxxxxlarge,
    height: sizes.xxxxxxxxlarge,
  },

  wrapper: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    borderRadius: sizes.xxxxxxxxxsmall,
    padding: spacing.xxsmall,
  },
});

const styles = {
  root,
  picture,
};

export default styles;
