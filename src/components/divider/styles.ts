import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  divider: $create({
    horizontal: {
      width: sizes.full,
      marginBlockStart: "var(--margin-start)",
      marginBlockEnd: "var(--margin-end)",
    },

    vertical: {
      minHeight: sizes.xxxxsmall,
      maxHeight: sizes.full,
      marginInlineStart: "var(--margin-start)",
      marginInlineEnd: "var(--margin-end)",
      alignSelf: "stretch",
    },
  }),

  simple: $create({
    horizontal: {
      height: sizes.smallest,
      backgroundColor: "var(--color-outline-variant)",
    },

    vertical: {
      width: sizes.smallest,
      backgroundColor: "var(--color-outline-variant)",
    },
  }),

  labeled: $create({
    horizontal: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "::before": {
        height: sizes.smallest,
        width: "var(--offset)",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },

      "::after": {
        height: sizes.smallest,
        width: "calc(100% - var(--offset))",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },
    },

    vertical: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "::before": {
        width: sizes.smallest,
        height: "var(--offset)",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },

      "::after": {
        width: sizes.smallest,
        height: "calc(100% - var(--offset))",
        backgroundColor: "var(--color-outline-variant)",
        content: "''",
      },
    },
  }),

  label: $create({
    horizontal: {
      marginInline: spacing.xxsmall,
      whiteSpace: "nowrap",
    },

    vertical: {
      marginBlock: spacing.xxsmall,
      whiteSpace: "nowrap",
    },
  }),
};

export default styles;
