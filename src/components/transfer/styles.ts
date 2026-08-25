import { create as $create } from "@stylexjs/stylex";
import { spacing, elevations, sizes } from "../theme/tokens.stylex";

const item = $create({
  base: {
    display: "flex",
    alignItems: "center",
    paddingInline: spacing.medium,
    paddingBlock: spacing.xxxxxsmall,
    gap: spacing.xxsmall,
  },
});

const list = $create({
  base: {
    minWidth: sizes.xxxxxxxxxxlarge,
    maxHeight: sizes.xxxxxxxxxxxlarge,
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxxxxsmall,
  },

  header: {
    display: "flex",
    alignItems: "center",
    padding: spacing.xxsmall,
    borderTopLeftRadius: sizes.xxxxsmall,
    borderTopRightRadius: sizes.xxxxsmall,
    borderBottomLeftRadius: sizes.xxxxxxxxxxsmall,
    borderBottomRightRadius: sizes.xxxxxxxxxxsmall,
    boxShadow: elevations.xsmall,
  },

  title: {
    overflow: "hidden",
    textAlign: "end",
    flex: "auto",
  },

  body: {
    minHeight: sizes.xxxxxxxxxxlarge,
    flexGrow: 1,

    margin: spacing.none,
    borderTopLeftRadius: sizes.xxxxxxxxxxsmall,
    borderTopRightRadius: sizes.xxxxxxxxxxsmall,
    borderBottomLeftRadius: sizes.xxxxxxxsmall,
    borderBottomRightRadius: sizes.xxxxxxxsmall,
    boxShadow: elevations.xsmall,
    overflow: "auto",

    paddingInline: spacing.none,
    paddingBlock: spacing.xxxxxsmall,
  },
});

const transfer = $create({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: spacing.xxsmall,
  },

  operation: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
    alignSelf: "center",
  },
});

const styles = {
  item,
  list,
  transfer,
};

export default styles;
