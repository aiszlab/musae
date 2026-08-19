import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  bench: $create({
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
  }),

  heading: $create({
    default: {},

    collapsed: {
      justifyContent: "center",
      paddingInline: spacing.none,
    },
  }),

  collapser: $create({
    default: {
      marginInlineStart: "auto",
    },
  }),

  header: $create({
    default: {},
  }),

  trailing: $create({
    default: {
      display: "flex",
      gap: spacing.xxsmall,
      marginInlineStart: spacing.auto,
    },
  }),

  sidebar: $create({
    default: {},

    collapsed: {
      paddingInline: spacing.none,
      paddingBlockEnd: spacing.none,
      paddingBlockStart: spacing.xxxxxxlarge,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }),

  menu: $create({
    default: {
      overflow: "hidden",
    },

    collapsed: {
      width: "fit-content",
    },
  }),

  expander: $create({
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
  }),

  main: $create({
    default: {},
  }),
};

export default styles;
