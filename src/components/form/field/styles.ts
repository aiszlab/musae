import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../../hooks/use-theme-color-vars";

const layout = $create({
  space: {
    marginBlockEnd: spacing.xxxlarge,
  },

  required: {
    "::before": {
      content: '"*"',
      color: "var(--color-error)" satisfies ThemeColorVariable,
      marginRight: spacing.xxxxxsmall,
    },
  },

  supporting: {
    minHeight: sizes.xsmall,
    paddingInline: spacing.large,
    display: "flex",
    flexDirection: "column",
  },
});

const supporting = $create({
  default: {
    color: "var(--color-secondary)",
    marginBlock: spacing.xxxxxsmall,
  },
});

const error = $create({
  default: {
    color: "var(--color-error)" satisfies ThemeColorVariable,
    marginBlock: spacing.xxxxxsmall,
    height: 0,
    overflow: "hidden",
  },
});

const styles = {
  layout,
  supporting,
  error,
};

export default styles;
