import { create as $create } from "@stylexjs/stylex";
import { positions, sizes, spacing } from "../theme/tokens.stylex";

const styles = $create({
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: positions.dialog,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "auto",
    backgroundColor: "var(--color-surface-dim)",
    opacity: 0,
  },

  panel: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.large,
    minWidth: 480,
    maxHeight: `calc(100% - ${spacing.xxxxxxlarge} * 2)`,
    margin: spacing.xxxxxxlarge,
    borderRadius: sizes.xxxxxxxsmall,
    pointerEvents: "auto",
    backgroundColor: "var(--color-surface-container-lowest)",
    opacity: 0,
    position: "relative",
    paddingBlock: spacing.xxxlarge,
  },

  header: {
    paddingInline: spacing.xxxlarge,
  },

  body: { flex: 1, wordBreak: "break-word", overflow: "auto", paddingInline: spacing.xxxlarge },

  footer: {
    marginBlockStart: spacing.xxsmall,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingInline: spacing.xxxlarge,
  },
});

export default styles;
