import { useEvent, useMounted } from "@aiszlab/relax";
import React, { useContext, useState } from "react";
import type { ChatItemProps } from "../../types/chat";
import { Context } from "./context";
import { create as $create, props as $props, keyframes as $keyframes } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const blink = $keyframes({
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

const styles = $create({
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
      animationName: blink,
      animationDuration: "1s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    },
  },
});

const Item = ({ message, content: _content = "" }: ChatItemProps) => {
  const [content, setContent] = useState(_content);
  const { classNames, onMessage } = useContext(Context);
  const isOverride = !!onMessage?.override;
  const [status, setStatus] = useState<"complete" | "error" | "loading">(() => {
    if (_content) return "complete";
    return "loading";
  });

  const _themeColorVars = useThemeColorVars([
    "surface-container-highest",
    "on-surface",
    "surface-container",
  ]);

  // use callback way to receive stream like message
  const receive = useEvent((_content: string) => {
    if (isOverride) {
      setContent(_content);
      return;
    }
    setContent((prev) => prev + _content);
  });

  // on component mounted, callback
  useMounted(() => {
    // already `complete` status, mean it is a history message
    // ignore it
    if (status === "complete") return;

    // listen message
    onMessage?.(message, {
      next: receive,
      complete: () => setStatus("complete"),
      error: () => setStatus("error"),
    });
  });

  const styled = {
    item: $props(styles.item),
    send: $props(styles.send),
    receive: $props(styles.receive, status === "loading" && styles.receiving),
  };

  return (
    <div
      className={stringify(classNames.item, styled.item.className)}
      style={{
        ...styled.item.style,
        ..._themeColorVars,
      }}
    >
      <div className={stringify(classNames.send, styled.send.className)} style={styled.send.style}>
        {message}
      </div>
      <div
        className={stringify(classNames.receive, styled.receive.className)}
        style={styled.receive.style}
      >
        {content}
      </div>
    </div>
  );
};

export default Item;
