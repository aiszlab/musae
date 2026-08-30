import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const container = $create({
  base: {
    position: "relative",
    display: "inline-flex",
    width: sizes.full,
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

    ":hover": {
      "@media (hover: hover)": {
        backgroundColor: "var(--color-on-surface-opacity-08)" satisfies ThemeColorVariable,
      },
    },
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

const styles = { container, leading, trailing, clear, searchButton };

export default styles;
