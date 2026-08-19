import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = $create({
  picker: {
    flex: 1,
    display: "flex",
    columnGap: spacing.xxsmall,
    alignItems: "center",
    maxWidth: sizes.full,
  },

  trigger: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "fit-content",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: sizes.medium,
  },
});

export default styles;
