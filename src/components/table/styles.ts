import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const table = $create({
  base: {
    width: "100%",

    // reset table
    borderCollapse: "collapse",
  },
});

const body = $create({
  cell: {
    // reset body
    borderInlineWidth: sizes.none,
    borderBlockStartWidth: sizes.none,

    // apply body
    paddingInline: spacing.xxsmall,
    paddingBlock: spacing.medium,
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    borderStyle: "solid",
    borderBlockEndWidth: sizes.smallest,
  },

  bordered: {
    borderInlineWidth: sizes.smallest,
  },

  child: {
    paddingInlineStart: `calc(var(--depth) * ${spacing.large})`,
  },
});

const cell = $create({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  handlers: {
    display: "inline-flex",
    flexDirection: "row",
    gap: spacing.xxxxxsmall,
    color: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
    userSelect: "none",
  },
});

const sort = $create({
  base: {
    position: "relative",
    cursor: "pointer",
  },

  half: {
    position: "absolute",
    insetBlockStart: 0,
    insetInlineStart: 0,
    height: sizes.half,
    overflow: "hidden",
  },

  checked: {
    color: "var(--color-primary)" satisfies ThemeColorVariable,
  },
});

const header = $create({
  cell: {
    borderWidth: sizes.none,
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    textAlign: "start",
    position: "relative",
    paddingInline: spacing.xxsmall,
    paddingBlock: spacing.medium,
    borderStyle: "solid",
    borderBottomWidth: sizes.smallest,
  },

  unbordered: {
    ":not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      width: sizes.smallest,
      height: sizes.xsmall,
      backgroundColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      transform: "translateY(-50%)",
      insetInlineEnd: 0,
    },
  },

  bordered: {
    borderWidth: sizes.smallest,
  },
});

const styles = {
  table,
  body,
  cell,
  sort,
  header,
};

export default styles;
