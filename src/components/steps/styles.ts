import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const item = {
  step: $create({
    default: {
      flex: 1,
      display: "grid",
      alignItems: "center",
      columnGap: spacing.xxxsmall,
      overflow: "hidden",
      pointerEvents: "none",

      gridTemplateAreas: "'leading title' '. description'",
      gridTemplateColumns: "auto 1fr",
    },

    clickable: {
      cursor: "pointer",
      pointerEvents: null,
    },
  }),

  leading: $create({
    default: {
      gridArea: "leading",
    },

    tail: {
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.infinity,
        width: sizes.smallest,
        backgroundColor: "var(--color-primary)",
        insetBlockStart: "100%",
        insetInlineStart: `calc((100% - ${sizes.smallest}) / 2)`,
        marginBlockStart: spacing.xxsmall,
      },
    },
  }),

  sign: $create({
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: sizes.infinity,
      overflow: "hidden",
      width: `var(--size, ${sizes.xsmall})`,
      height: `var(--size, ${sizes.xsmall})`,
    },

    doing: {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
    },

    done: {
      backgroundColor: "var(--color-primary-container)",
      color: "var(--color-on-primary-container)",
    },

    todo: {
      backgroundColor: "var(--color-secondary)",
      color: "var(--on-secondary)",
    },
  }),

  title: $create({
    default: {
      gridArea: "title",
      alignItems: "center",
    },

    tail: {
      position: "relative",

      "::after": {
        content: "''",
        position: "absolute",
        height: sizes.smallest,
        width: sizes.infinity,
        backgroundColor: "var(--color-primary)",
        marginInlineStart: spacing.xxsmall,
        insetBlockStart: `calc((100% - ${sizes.smallest}) / 2)`,
      },
    },
  }),

  description: $create({
    default: {
      gridArea: "description",
    },
  }),
};

const steps = $create({
  steps: {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing.xxsmall,
  },

  horizontal: {
    flexDirection: "row",
  },

  vertical: {
    flexDirection: "column",
  },
});

const styles = {
  item,
  steps,
};

export default styles;
