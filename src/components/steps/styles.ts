import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const step = $create({
  base: {
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
});

const leading = $create({
  base: {
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
});

const sign = $create({
  base: {
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
});

const title = $create({
  base: {
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
});

const description = $create({
  base: {
    gridArea: "description",
  },
});

const steps = $create({
  base: {
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
  step,
  leading,
  sign,
  title,
  description,
  steps,
};

export default styles;
