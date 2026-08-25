import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const item = $create({
  base: {
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
});

const labeled = $create({
  base: {
    gridTemplateColumns: "1fr auto 1fr",
  },

  right: {
    gridTemplateAreas: "'label leading description'",
  },

  left: {
    gridTemplateAreas: "'description leading label'",
  },
});

const leading = $create({
  base: {
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
});

const sign = $create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: `var(--sign-size, ${sizes.xsmall})`,
    height: `var(--sign-size, ${sizes.xsmall})`,
  },
});

const dot = $create({
  base: {
    width: sizes.xxxxxxxxxsmall,
    height: sizes.xxxxxxxxxsmall,
    borderRadius: sizes.infinity,
    backgroundColor: "var(--color-primary)",
  },
});

const label = $create({
  base: {
    gridArea: "label",
  },

  right: {
    justifySelf: "flex-end",
  },

  left: {
    justifySelf: "flex-start",
  },
});

const description = $create({
  base: {
    gridArea: "description",
  },

  right: {
    justifySelf: "flex-start",
  },

  left: {
    justifySelf: "flex-end",
  },
});

const timeline = $create({
  base: {
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
  labeled,
  leading,
  sign,
  dot,
  label,
  description,
  timeline,
};

export default styles;
