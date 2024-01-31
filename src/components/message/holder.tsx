import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { MessageRef, MessageConfig } from "./types";
import Message from "./message";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { RequiredIn } from "@aiszlab/relax";
import { AnimatePresence } from "framer-motion";

const styles = stylex.create({
  holder: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    pointerEvents: "none",
    zIndex: 100,
    paddingInline: spacing.xlarge,
    paddingTop: spacing.small,
  },
});

const Holder = forwardRef<MessageRef>((props, ref) => {
  const [messages, setMessages] = useState<Map<string, RequiredIn<MessageConfig, "key">>>(new Map());

  useImperativeHandle(ref, () => ({
    add: (props) => {
      if (messages.has(props.key)) return;
      setMessages((shown) => new Map([...shown, [props.key, props]]));
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
      <AnimatePresence>
        {Array.from(messages.values()).map(({ content, ...item }) => (
          <Message
            onClose={() => {
              hidden(item.key);
            }}
            {...item}
          >
            {content}
          </Message>
        ))}
      </AnimatePresence>
    </div>
  );
});

export default Holder;
