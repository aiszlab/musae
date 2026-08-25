import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";

const item = $create({
  base: {
    borderBottomWidth: sizes.smallest,
    borderBottomStyle: "solid",
    borderBottomColor: "var(--color-outline-variant)",

    ":last-of-type": {
      borderBottomWidth: 0,
    },
  },
});

const header = $create({
  base: {
    paddingInline: spacing.large,
    paddingBlock: spacing.medium,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxsmall,
    cursor: "pointer",
  },
});

const panel = $create({
  base: {
    height: "auto",
  },

  hidden: {
    display: "none",
  },
});

const content = $create({
  base: {
    borderTopWidth: sizes.smallest,
    borderTopStyle: "solid",
    borderTopColor: "var(--color-outline-variant)",
    padding: spacing.large,
  },
});

const collapser = $create({
  base: {
    willChange: "transform",
    transitionProperty: "transform",
    transitionDuration: duration.short,
  },

  expanded: {
    transform: "rotate(90deg)",
  },
});

const collapse = $create({
  base: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",
    borderRadius: sizes.xxxxxxxsmall,
  },
});

const styles = {
  item,
  header,
  panel,
  content,
  collapser,
  collapse,
};

export default styles;
