import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const table = $create({
  default: {
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

const styles = {
  table,
  body,
};

export default styles;
