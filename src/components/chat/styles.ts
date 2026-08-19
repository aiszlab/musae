import { create as $create, keyframes as $keyframes } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";

const item_blink = $keyframes({
  from: {
    color: "inherit",
  },

  "50%": {
    color: "transparent",
  },

  to: {
    color: "inherit",
  },
});

const item = $create({
  item: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.medium,
  },

  send: {
    alignSelf: "flex-end",
    width: "fit-content",
    paddingInline: spacing.large,
    paddingBlock: spacing.xxsmall,
    backgroundColor: "var(--color-surface-container-highest)",
    color: "var(--color-on-surface)",
    borderRadius: sizes.xxxxxxxsmall,
  },

  receive: {
    alignSelf: "flex-start",
    paddingInline: spacing.large,
    paddingBlock: spacing.xxsmall,
    backgroundColor: "var(--color-surface-container)",
    color: "var(--color-on-surface)",
    borderRadius: sizes.xxxxxxxsmall,
  },

  receiving: {
    "::after": {
      content: "|",
      animationName: item_blink,
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
});

const chat = $create({
  chat: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.medium,
  },

  messages: {
    flex: 1,
    padding: spacing.xxsmall,
    display: "flex",
    flexDirection: "column",
    gap: spacing.medium,
    overflow: "auto",
  },

  footer: {
    padding: spacing.xxsmall,
    display: "flex",
    flexDirection: "row",
    gap: spacing.medium,
  },
});

const styles = {
  item,
  chat,
};

export default styles;
