import styles from "./styles";
import { useEvent, useMounted } from "@aiszlab/relax";
import React, { useContext, useState } from "react";
import type { ChatItemProps } from "../../types/chat";
import { Context } from "./context";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

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
    item: $props(styles.item.default),
    send: $props(styles.item.send),
    receive: $props(styles.item.receive, status === "loading" && styles.item.receiving),
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
