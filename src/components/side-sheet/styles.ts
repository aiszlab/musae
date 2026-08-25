import { create as $create } from "@stylexjs/stylex";
import type { ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { sizes, spacing } from "../theme/tokens.stylex";

const panel = $create({
  base: {
    backgroundColor: "var(--color-surface-container-low)" satisfies ThemeColorVariable,
    paddingBottom: spacing.xxxlarge,
  },
});

const standard = $create({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "var(--size)",
    height: sizes.full,
    flexShrink: 0,
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
    paddingBottom: spacing.xxxlarge,
  },

  right: {
    borderLeftWidth: sizes.smallest,
    borderLeftStyle: "solid",
    borderLeftColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
  },

  left: {
    borderRightWidth: sizes.smallest,
    borderRightStyle: "solid",
    borderRightColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
  },

  top: {
    borderBottomWidth: sizes.smallest,
    borderBottomStyle: "solid",
    borderBottomColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
  },

  bottom: {
    borderTopWidth: sizes.smallest,
    borderTopStyle: "solid",
    borderTopColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
  },
});

const header = $create({
  base: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: spacing.medium,
    paddingBottom: spacing.large,
    paddingInlineEnd: spacing.medium,
  },

  "with-title": {
    paddingInlineStart: spacing.xxxlarge,
  },

  "with-back": {
    paddingInlineStart: spacing.xxxxxsmall,
  },
});

const title = $create({
  base: {
    flex: 1,
    minWidth: 0,
    paddingTop: spacing.medium,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },
});

const content = $create({
  base: {
    flex: 1,
    overflow: "auto",
    padding: spacing.xxxlarge,
  },
});

const actions = $create({
  base: {
    display: "flex",
    flexDirection: "column",
  },
});

const buttons = $create({
  base: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
    paddingTop: spacing.large,
    paddingInline: spacing.xxxlarge,
  },
});

export const styles = { panel, standard, header, title, content, actions, buttons };
