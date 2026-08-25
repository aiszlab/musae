import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const select = $create({
  picked: {
    gap: spacing.xxxxxsmall,
    flexWrap: "wrap",
  },

  pickable: {
    padding: spacing.xxxxxsmall,
  },
});

const selector = {
  input: {
    focused: $create({
      base: {},

      searchable: {
        "::placeholder": {
          color: "var(--color-on-surface)" satisfies ThemeColorVariable,
        },
      },
    }),
  },

  placeholder: $create({
    base: {
      color: "var(--color-on-surface-opacity-38)" satisfies ThemeColorVariable,
    },
  }),
};

const styles = {
  select,
  selector,
};

export default styles;
