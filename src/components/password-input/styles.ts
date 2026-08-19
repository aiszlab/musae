import { create as $create } from "@stylexjs/stylex";
import { duration } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const styles = $create({
  visibility: {
    color: "var(--color-secondary-fixed-dim)" satisfies ThemeColorVariable,
    willChange: "color",
    transitionProperty: "color",
    transitionDuration: duration.short,

    ":hover": {
      "@media (hover: hover)": {
        color: "var(--color-secondary)" satisfies ThemeColorVariable,
      },
    },
  },
});

export default styles;
