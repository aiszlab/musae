import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { MessageRef, MessageProps } from "./types";
import Message from "./message";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  holder: {
    position: "fixed",
    top: spacing.small,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    pointerEvents: "none",
    zIndex: 100,
  },
});

const Holder = forwardRef<MessageRef>((props, ref) => {
  const [messages, setMessages] = useState<Map<string, MessageProps>>(new Map());

  useImperativeHandle(ref, () => ({
    add: (props) => {
      if (messages.has(props.id)) return;
      setMessages((shown) => new Map([...shown, [props.id, props]]));
    },
  }));

  /// remove message
  const hidden = useCallback(
    (id: string) =>
      setMessages((shown) => {
        const next = new Map(shown);
        next.delete(id);
        return next;
      }),
    []
  );

  if (messages.size === 0) return null;

  return (
    <div {...stylex.props(styles.holder)}>
      {Array.from(messages.entries()).map(([key, item]) => (
        <Message onHidden={hidden} key={key} {...item} />
      ))}
    </div>
  );
});

export default Holder;
