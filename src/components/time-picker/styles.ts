import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const styles = $create({
  panel: {
    marginInline: spacing.xxxxxsmall,
  },

  footer: {
    borderTopWidth: sizes.smallest,
    borderTopStyle: "solid",
    borderTopColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.medium,
    minHeight: sizes.xlarge,
  },
});

export default styles;
