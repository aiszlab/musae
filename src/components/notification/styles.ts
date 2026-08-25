import { create as $create } from "@stylexjs/stylex";
import { duration, elevations, sizes, spacing, positions } from "../theme/tokens.stylex";

const notification = $create({
  base: {
    backgroundColor: "var(--color-surface-container-lowest)",
    color: "var(--color-on-surface)",
    borderRadius: sizes.xxxxxxxxxsmall,
    boxShadow: elevations.xsmall,
    maxWidth: sizes.full,
    pointerEvents: "auto",
    overflow: "hidden",
    transitionProperty: "margin-top, transform",
    transitionDuration: duration.short,
    // hidden notification
    transform: "var(--placement)",
    opacity: 0,
    marginBlockStart: spacing.none,
    // layout
    display: "grid",
    gap: spacing.xxsmall,
    gridTemplateAreas: "'leading title closer' '. description description'",
    // padding
    paddingBlock: spacing.large,
    paddingInline: spacing.large,
  },

  simple: {
    gridTemplateAreas: "'leading description closer'",
    // padding
    paddingBlock: spacing.xxsmall,
    paddingInline: spacing.medium,
  },
});

const leading = $create({
  base: {
    gridArea: "leading",
    alignSelf: "center",
    display: "inline-flex",
    color: "var(--color-primary)",
  },

  success: {
    color: "var(--color-success)",
  },

  warning: {
    color: "var(--color-warning)",
  },

  error: {
    color: "var(--color-error)",
  },
});

const title = $create({
  base: {
    gridArea: "title",
  },
});

const description = $create({
  base: {
    gridArea: "description",
    display: "inline-block",
    wordBreak: "break-word",
  },

  simple: {
    alignSelf: "center",
  },
});

const closer = $create({
  base: {
    gridArea: "closer",
    alignSelf: "center",
    justifySelf: "flex-end",
  },
});

const holder = $create({
  base: {
    position: "fixed",
    zIndex: positions.notification,
    display: "flex",
    flexDirection: "column",
    pointerEvents: "none",
    rowGap: spacing.medium,
    padding: spacing.medium,
  },

  top: {
    insetBlockStart: 0,
    insetInline: 0,
    alignItems: "center",
  },

  "top-right": {
    insetBlockStart: 0,
    insetInlineEnd: 0,
  },

  "top-left": {
    insetBlockStart: 0,
    insetInlineStart: 0,
  },

  bottom: {
    insetBlockEnd: 0,
    insetInline: 0,
    alignItems: "center",
  },

  "bottom-left": {
    insetBlockEnd: 0,
    insetInlineStart: 0,
  },

  "bottom-right": {
    insetBlockEnd: 0,
    insetInlineEnd: 0,
  },
});

const styles = {
  notification,
  leading,
  title,
  description,
  closer,
  holder,
};

export default styles;
