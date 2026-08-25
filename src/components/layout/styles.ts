import { create as $create } from "@stylexjs/stylex";
import { spacing, sizes } from "../theme/tokens.stylex";

const layout = $create({
  base: {
    display: "grid",
    gridTemplateAreas: "var(--layout)",
  },
});

const footer = $create({
  base: {
    gridArea: "footer",
    paddingInline: spacing.xxxxxxxlarge,
  },
});

const main = $create({
  base: {
    gridArea: "main",
    overflow: "auto",
    padding: spacing.xxxxxxxlarge,

    borderWidth: sizes.none,
    borderTopWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",
  },
});

const sidebar = $create({
  base: {
    gridArea: "sidebar",
    padding: spacing.xxxxxxlarge,
    overflow: "hidden",

    borderWidth: sizes.none,
    borderTopWidth: sizes.smallest,
    borderRightWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",

    ":hover": {
      "@media (hover: hover)": {
        overflow: "auto",
      },
    },
  },
});

const header = $create({
  base: {
    gridArea: "header",
    display: "flex",
    alignItems: "center",
    gap: spacing.medium,

    paddingInline: spacing.xxxxxxxlarge,
  },
});

const heading = $create({
  base: {
    gridArea: "heading",
    paddingInline: spacing.xxxxxxlarge,
    fontWeight: 700,

    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
    overflow: "hidden",
    whiteSpace: "nowrap",

    borderWidth: sizes.none,
    borderRightWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)",
  },
});

const styles = {
  layout,
  footer,
  main,
  sidebar,
  header,
  heading,
};

export default styles;
