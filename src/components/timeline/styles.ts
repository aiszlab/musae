import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const item = {
  item: $create({
    default: {
      display: "grid",
      justifyContent: "flex-start",
      gap: spacing.medium,
      overflow: "hidden",
      paddingBlockEnd: spacing.xxxlarge,
    },

    right: {
      gridTemplateColumns: "auto 1fr",
      gridTemplateAreas: "'leading description'",
    },

    left: {
      gridTemplateColumns: "1fr auto",
      gridTemplateAreas: "'description leading'",
    },
  }),

  labeled: $create({
    default: {
      gridTemplateColumns: "1fr auto 1fr",
    },

    right: {
      gridTemplateAreas: "'label leading description'",
    },

    left: {
      gridTemplateAreas: "'description leading label'",
    },
  }),

  leading: $create({
    default: {
      gridArea: "leading",
      alignSelf: "flex-start",
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
      },
    },
  }),

  sign: $create({
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: `var(--sign-size, ${sizes.xsmall})`,
      height: `var(--sign-size, ${sizes.xsmall})`,
    },
  }),

  dot: $create({
    default: {
      width: sizes.xxxxxxxxxsmall,
      height: sizes.xxxxxxxxxsmall,
      borderRadius: sizes.infinity,
      backgroundColor: "var(--color-primary)",
    },
  }),

  label: $create({
    default: {
      gridArea: "label",
    },

    right: {
      justifySelf: "flex-end",
    },

    left: {
      justifySelf: "flex-start",
    },
  }),

  description: $create({
    default: {
      gridArea: "description",
    },

    right: {
      justifySelf: "flex-start",
    },

    left: {
      justifySelf: "flex-end",
    },
  }),
};

const timeline = $create({
  timeline: {
    // reset timeline
    margin: spacing.none,
    padding: spacing.none,

    // apply timeline
    display: "flex",
    flexDirection: "column",
  },
});

const styles = {
  item,
  timeline,
};

export default styles;
