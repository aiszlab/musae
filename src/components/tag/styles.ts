import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const tag = $create({
  base: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    width: sizes.fit,
    boxSizing: "border-box",
  },
});

const size = $create({
  small: {
    borderRadius: spacing.xxxxxsmall,
    gap: spacing.xxxxxsmall,
    height: sizes.small,
    "--padding-inline": spacing.xxsmall,
  },

  medium: {
    borderRadius: spacing.xxxsmall,
    gap: spacing.xxxsmall,
    height: sizes.medium,
    "--padding-inline": spacing.medium,
  },

  large: {
    paddingInline: spacing.large,
    borderRadius: spacing.xxsmall,
    gap: spacing.xxsmall,
    height: sizes.large,
    "--padding-inline": spacing.large,
  },
});

const variant = $create({
  filled: {
    backgroundColor: "var(--color-primary-container)" satisfies ThemeColorVariable,
    color: "var(--color-on-primary-container)" satisfies ThemeColorVariable,
    paddingInline: "var(--padding-inline)",
  },

  outlined: {
    backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    color: "inherit",
    paddingInline: `calc(var(--padding-inline) - ${spacing.smallest})`,
  },
});

const styles = { tag, size, variant };

export default styles;
