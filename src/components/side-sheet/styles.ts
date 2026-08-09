import { create as $create } from "@stylexjs/stylex";
import type { ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { sizes, spacing } from "../theme/tokens.stylex";

const panel = $create({
  default: {
    backgroundColor: "var(--color-surface-container-low)" satisfies ThemeColorVariable,
    paddingBottom: spacing.xxxlarge,
  },
});

const standard = $create({
  default: {
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
  default: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: spacing.medium,
    paddingBottom: spacing.large,
    paddingInlineEnd: spacing.medium,
  },
  withTitle: {
    paddingInlineStart: spacing.xxxlarge,
  },
  withBack: {
    paddingInlineStart: spacing.xxxxxsmall,
  },
});

const content = $create({
  default: {
    flex: 1,
    minHeight: 0,
    overflow: "auto",
    overscrollBehavior: "contain",
  },
});

const title = $create({
  default: {
    flex: 1,
    minWidth: 0,
    paddingTop: spacing.medium,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },
});

const actions = $create({
  default: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
    paddingTop: spacing.large,
    paddingInline: spacing.xxxlarge,
  },
});

export const styles = { panel, standard, header, title, content, actions };
