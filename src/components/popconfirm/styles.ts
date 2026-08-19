import { create as $create } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const styles = $create({
  popconfirm: {
    padding: spacing.medium,
    maxWidth: "100vw",

    // layout
    display: "grid",
    gridTemplateAreas: "'leading title' '. content' 'footer footer'",
    gap: spacing.xxsmall,
  },

  simple: {
    gridTemplateAreas: "'leading content' 'footer footer'",
  },

  leading: {
    gridArea: "leading",
    display: "flex",
    alignSelf: "center",
    color: "var(--color-warning)" satisfies ThemeColorVariable,
  },

  title: {
    gridArea: "title",
  },

  content: {
    gridArea: "content",
  },

  footer: {
    gridArea: "footer",
    justifyContent: "flex-end",
  },
});

export default styles;
