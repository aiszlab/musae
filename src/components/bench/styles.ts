import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";

const bench = $create({
  base: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateRows: `${sizes.xxxxxxlarge} ${sizes.fr} ${sizes.auto}`,
    gridTemplateColumns: `${sizes.xxxxxxxxxxxlarge} ${sizes.fr}`,
    transitionProperty: "grid-template-columns",
    transitionDuration: duration.medium,
  },

  collapsed: {
    // gridTemplateAreas: "'heading header' 'sidebar main' 'expander main'",
    gridTemplateColumns: `${sizes.xxxxxxlarge} ${sizes.fr}`,
  },
});

const heading = $create({
  base: {},

  collapsed: {
    justifyContent: "center",
    paddingInline: spacing.none,
  },
});

const collapser = $create({
  base: {
    marginInlineStart: "auto",
  },
});

const header = $create({
  base: {},
});

const trailing = $create({
  base: {
    display: "flex",
    gap: spacing.xxsmall,
    marginInlineStart: spacing.auto,
  },
});

const sidebar = $create({
  base: {},

  collapsed: {
    paddingInline: spacing.none,
    paddingBlockEnd: spacing.none,
    paddingBlockStart: spacing.xxxxxxlarge,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const menu = $create({
  base: {
    overflow: "hidden",
  },

  collapsed: {
    width: "fit-content",
  },
});

const expander = $create({
  base: {
    gridArea: "expander",
    width: sizes.full,
    display: "flex",
    justifyContent: "center",
    paddingBlock: spacing.xxxlarge,
    marginBlockStart: spacing.auto,

    borderWidth: sizes.none,
    borderTopWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",
  },
});

const main = $create({
  base: {},
});

const styles = { bench, heading, collapser, header, trailing, sidebar, menu, expander, main };

export default styles;
