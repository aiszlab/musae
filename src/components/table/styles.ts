import { create as $create } from "@stylexjs/stylex";
import type { ThemeColorVariable } from "../../hooks/use-theme-color-vars";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = {
  table: $create({
    default: { width: "100%", borderCollapse: "collapse" },
  }),

  bodyCell: $create({
    default: {
      borderInlineWidth: sizes.none,
      borderBlockStartWidth: sizes.none,
      paddingInline: spacing.xxsmall,
      paddingBlock: spacing.medium,
      borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      borderStyle: "solid",
      borderBlockEndWidth: sizes.smallest,
    },
    bordered: { borderInlineWidth: sizes.smallest },
    child: {
      paddingInlineStart: `calc(var(--depth) * ${spacing.large})`,
    },
  }),

  headerCell: $create({
    default: {
      borderWidth: sizes.none,
      backgroundColor: "var(--color-surface)" satisfies ThemeColorVariable,
      borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      textAlign: "start",
      position: "relative",
      paddingInline: spacing.xxsmall,
      paddingBlock: spacing.medium,
      borderStyle: "solid",
      borderBottomWidth: sizes.smallest,
    },
    unbordered: {
      ":not(:last-of-type)::after": {
        content: '\"\"',
        position: "absolute",
        top: "50%",
        width: sizes.smallest,
        height: sizes.xsmall,
        backgroundColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
        transform: "translateY(-50%)",
        insetInlineEnd: 0,
      },
    },
    bordered: { borderWidth: sizes.smallest },
  }),

  headerContent: $create({
    default: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    handlers: {
      display: "inline-flex",
      flexDirection: "row",
      gap: spacing.xxxxxsmall,
      color: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
      userSelect: "none",
    },
  }),

  sort: $create({
    default: { position: "relative", cursor: "pointer" },
    half: {
      position: "absolute",
      insetBlockStart: 0,
      insetInlineStart: 0,
      height: sizes.half,
      overflow: "hidden",
    },
    checked: { color: "var(--color-primary)" satisfies ThemeColorVariable },
  }),
};

export default styles;
