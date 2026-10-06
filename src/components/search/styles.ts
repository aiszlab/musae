import { create as $create } from "@stylexjs/stylex";
import {
  OPACITY,
  opacity,
  positions,
  searchViewSizes,
  sizes,
  spacing,
} from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const container = $create({
  base: {
    position: "relative",
    display: "inline-flex",
    width: sizes.full,
    minWidth: searchViewSizes.minWidth,
    maxWidth: searchViewSizes.maxWidth,
  },
});

const field = $create({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    width: sizes.full,
    minWidth: sizes.none,
    height: sizes.xxxxlarge,
    margin: spacing.none,
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.xxxxxsmall,
    backgroundColor: "var(--color-surface-container-high)" satisfies ThemeColorVariable,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    cursor: "text",
  },

  enabled: {
    ":active": {
      backgroundColor: `color-mix(in srgb, var(--color-on-surface) ${OPACITY.medium * 100}%, var(--color-surface-container-high))`,
    },
  },

  pill: {
    borderRadius: sizes.infinity,
  },

  standard: {
    height: sizes.full,
    borderRadius: sizes.none,
  },

  disabled: {
    backgroundColor: "var(--color-on-surface-opacity-12)" satisfies ThemeColorVariable,
    color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
    cursor: "default",
  },
});

const fieldInput = $create({
  base: {
    flex: 1,
    minWidth: sizes.none,
    height: sizes.auto,
    margin: spacing.none,
    padding: spacing.none,
    borderWidth: sizes.none,
    outline: sizes.none,
    backgroundColor: "transparent",
    color: "var(--color-on-surface)" satisfies ThemeColorVariable,
    caretColor: "var(--color-primary)" satisfies ThemeColorVariable,
    fontSize: "inherit",
    lineHeight: "inherit",

    "::placeholder": {
      color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    },
  },

  disabled: {
    color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,

    "::placeholder": {
      color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
    },
  },
});

const leading = $create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: sizes.xxxlarge,
    height: sizes.xxxlarge,
    flexShrink: 0,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    padding: spacing.xxxxxsmall,
  },
});

const trailing = $create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.xxxxxsmall,
    paddingInlineEnd: spacing.xxxxxsmall,
  },
});

const clear = $create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: sizes.xxxlarge,
    height: sizes.xxxlarge,
    flexShrink: 0,
    borderWidth: sizes.none,
    backgroundColor: "transparent",
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    cursor: "pointer",
    borderRadius: sizes.infinity,
    padding: spacing.xxxxxsmall,
  },
});

const searchButton = $create({
  base: {
    flexShrink: 0,
    marginInlineEnd: spacing.none,
    borderTopLeftRadius: sizes.none,
    borderBottomLeftRadius: sizes.none,
    borderTopRightRadius: sizes.infinity,
    borderBottomRightRadius: sizes.infinity,
  },
});

const view = $create({
  root: {
    position: "fixed",
    inset: sizes.none,
    zIndex: positions.dialog,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  modalRoot: {
    padding: spacing.xxxxxxlarge,
  },

  overlay: {
    position: "absolute",
    inset: sizes.none,
    backgroundColor: "var(--color-surface-dim)" satisfies ThemeColorVariable,
    opacity: opacity.heavier,
  },

  panel: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    overflow: "hidden",
    backgroundColor: "var(--color-surface-container-high)" satisfies ThemeColorVariable,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },

  modal: {
    width: sizes.full,
    minWidth: searchViewSizes.minWidth,
    maxWidth: searchViewSizes.maxWidth,
    minHeight: searchViewSizes.minHeight,
    borderRadius: sizes.small,
  },

  fullScreen: {
    width: sizes.full,
    height: sizes.full,
    borderRadius: sizes.none,
  },

  header: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    flexShrink: 0,
    borderBlockEndStyle: "solid",
    borderBlockEndWidth: sizes.smallest,
    borderBlockEndColor: "var(--color-outline)" satisfies ThemeColorVariable,
  },

  modalHeader: {
    height: sizes.xxxxlarge,
  },

  fullScreenHeader: {
    height: searchViewSizes.fullScreenHeaderHeight,
  },

  action: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: sizes.xxxlarge,
    height: sizes.xxxlarge,
    flexShrink: 0,
    padding: spacing.xxxxxsmall,
    borderWidth: sizes.none,
    borderRadius: sizes.infinity,
    backgroundColor: "transparent",
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    cursor: "pointer",
  },
});

const resultList = $create({
  root: {
    flexGrow: 1,
    minHeight: sizes.none,
    overflowY: "auto",
    paddingBlock: spacing.xxsmall,
  },

  item: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    minHeight: searchViewSizes.resultItemHeight,
    paddingInline: spacing.xxxlarge,
    gap: spacing.large,
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
    cursor: "pointer",
  },

  activeItem: {
    backgroundColor: "var(--color-on-surface-opacity-08)" satisfies ThemeColorVariable,
  },

  disabledItem: {
    cursor: "default",
    opacity: opacity.thickest,
  },

  leading: {
    display: "inline-flex",
    flexShrink: 0,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minWidth: sizes.none,
    gap: spacing.xxsmall,
  },

  label: {
    color: "var(--color-on-surface-variant)" satisfies ThemeColorVariable,
  },

  supportingText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  trailing: {
    display: "inline-flex",
    flexShrink: 0,
  },
});

const styles = {
  container,
  field,
  fieldInput,
  leading,
  trailing,
  clear,
  searchButton,
  view,
  resultList,
};

export default styles;
