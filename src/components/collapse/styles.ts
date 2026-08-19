import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";

const item = {
  item: $create({
    default: {
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
      borderBottomColor: "var(--color-outline-variant)",

      ":last-of-type": {
        borderBottomWidth: 0,
      },
    },
  }),

  header: $create({
    default: {
      paddingInline: spacing.large,
      paddingBlock: spacing.medium,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xxsmall,
      cursor: "pointer",
    },
  }),

  panel: $create({
    default: {
      height: "auto",
    },

    hidden: {
      display: "none",
    },
  }),

  content: $create({
    default: {
      borderTopWidth: sizes.smallest,
      borderTopStyle: "solid",
      borderTopColor: "var(--color-outline-variant)",
      padding: spacing.large,
    },
  }),

  collapser: $create({
    default: {
      willChange: "transform",
      transitionProperty: "transform",
      transitionDuration: duration.short,
    },

    expanded: {
      transform: "rotate(90deg)",
    },
  }),
};

const collapse = $create({
  default: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",
    borderRadius: sizes.xxxxxxxsmall,
  },
});

const styles = {
  item,
  collapse,
};

export default styles;
