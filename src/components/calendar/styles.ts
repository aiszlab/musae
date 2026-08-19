import { create as $create } from "@stylexjs/stylex";
import { spacing, sizes } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const calendar = $create({
  default: {
    width: "fit-content",
  },

  header: {
    display: "flex",
    alignItems: "center",
    columnGap: spacing.xxsmall,
    paddingInline: spacing.medium,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },

  heading: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  body: {
    borderCollapse: "separate",
    borderSpacing: spacing.xxxxxsmall,
  },
});

const hooks = $create({
  cell: {
    height: sizes.large,
    width: sizes.large,
    padding: spacing.none,
    textAlign: "center",
  },

  header: {
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },

  date: {
    position: "relative",

    "::before": {
      content: "''",
      position: "absolute",
      backgroundColor: "var(--color-secondary-container)" satisfies ThemeColorVariable,
      height: sizes.xlarge,
    },
  },

  hidden: {
    visibility: "hidden",
  },

  range: {
    "::before": {
      insetInlineStart: `calc(${spacing.xxxxxxsmall} * -1)`,
      insetInlineEnd: `calc(${spacing.xxxxxxsmall} * -1)`,
    },
  },

  from: {
    "::before": {
      insetInlineStart: "50%",
      insetInlineEnd: `calc(${spacing.xxxxxxsmall} * -1)`,
    },
  },

  to: {
    "::before": {
      insetInlineStart: `calc(${spacing.xxxxxxsmall} * -1)`,
      insetInlineEnd: "50%",
    },
  },

  trigger: {
    margin: spacing.auto,
  },
});

const contribution = {
  calendar: $create({
    default: {
      borderCollapse: "separate",
      borderSpacing: spacing.xxxxxsmall,
    },

    scrollable: {
      maxWidth: "max-content",
      overflow: "auto",
    },
  }),

  cell: $create({
    default: {
      minWidth: sizes.xxxxxxsmall,
      minHeight: sizes.xxxxxxsmall,
      padding: spacing.none,
      borderRadius: sizes.xxxxxxxxxxsmall,
      cursor: "pointer",
      backgroundColor: "var(--color-primary)",
    },
  }),

  weekday: $create({
    cell: {
      padding: 0,
    },

    default: {
      height: sizes.xxxxxxsmall,
      overflow: "visible",
      display: "flex",
      alignItems: "center",
    },
  }),

  month: $create({
    cell: {
      padding: 0,
      position: "relative",
    },

    leading: {
      visibility: "hidden",
    },

    default: {
      position: "absolute",
      insetBlockStart: 0,
      insetInlineStart: 0,
    },
  }),

  legend: $create({
    default: {
      paddingBlock: spacing.xxxxxsmall,
      paddingInline: spacing.xxxxxxlarge,
      display: "flex",
      justifyContent: "flex-end",
    },
  }),

  levels: $create({
    default: {
      display: "flex",
      gap: spacing.xxxxxsmall,
      alignItems: "center",
    },

    level: {
      width: sizes.xxxxxxsmall,
      height: sizes.xxxxxxsmall,
      borderRadius: sizes.xxxxxxxxxxsmall,
    },
  }),
};

const styles = {
  calendar,
  hooks,
  contribution,
};

export default styles;
