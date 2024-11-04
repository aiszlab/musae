import { useEvent, useMounted } from "@aiszlab/relax";
import React, { useContext, useState } from "react";
import type { ChatItemProps } from "../../types/chat";
import { Context } from "./context";
import stylex, { keyframes } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";

const blink = keyframes({
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

const styles = stylex.create({
  item: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.medium,
  },

  send: (props: { backgroundColor: string; color: string }) => ({
    alignSelf: "flex-end",
    width: "fit-content",
    paddingInline: spacing.large,
    paddingBlock: spacing.xsmall,
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: sizes.xxxxsmall,
  }),

  receive: (props: { backgroundColor: string; color: string }) => ({
    alignSelf: "flex-start",
    paddingInline: spacing.large,
    paddingBlock: spacing.xsmall,
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: sizes.xxxxsmall,
  }),

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

const Item = ({ message, content: _content }: ChatItemProps) => {
  const [content, setContent] = useState(_content ?? "");
  const { classNames, onMessage } = useContext(Context);
  const theme = useTheme();
  const isOverride = !!onMessage?.override;
  const [status, setStatus] = useState<"complete" | "error" | "loading">(() => {
    if (!!_content) return "complete";
    return "loading";
  });

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
    item: stylex.props(styles.item),
    send: stylex.props(
      styles.send({
        backgroundColor: theme.colors["surface-container-highest"],
        color: theme.colors["on-surface"],
      }),
    ),
    receive: stylex.props(
      styles.receive({
        backgroundColor: theme.colors["surface-container"],
        color: theme.colors["on-surface"],
      }),
      status === "loading" && styles.receiving,
    ),
  };

  return (
    <div className={stringify(classNames.item, styled.item.className)} style={styled.item.style}>
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
