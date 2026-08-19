import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";

const bench = $create({
  default: {
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
  default: {},

  collapsed: {
    justifyContent: "center",
    paddingInline: spacing.none,
  },
});

const collapser = $create({
  default: {
    marginInlineStart: "auto",
  },
});

const header = $create({
  default: {},
});

const trailing = $create({
  default: {
    display: "flex",
    gap: spacing.xxsmall,
    marginInlineStart: spacing.auto,
  },
});

const sidebar = $create({
  default: {},

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
  default: {
    overflow: "hidden",
  },

  collapsed: {
    width: "fit-content",
  },
});

const expander = $create({
  default: {
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
  default: {},
});

const styles = { bench, heading, collapser, header, trailing, sidebar, menu, expander, main };

export default styles;
