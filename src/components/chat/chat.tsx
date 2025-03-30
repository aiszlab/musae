import React, { useCallback, useMemo, useState } from "react";
import { Textarea } from "../textarea";
import { useIdentity } from "@aiszlab/relax";
import Item from "./item";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES, Context } from "./context";
import type { ChatItemProps, ChatProps } from "../../types/chat";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";
import { IconButton } from "../icon-button";
import { RocketLaunch } from "../icon/icons";

const styles = $create({
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

const Chat = ({ onMessage, className, style, defaultValue, placeholder }: ChatProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const [, id] = useIdentity();
  const [message, setMessage] = useState("");
  const [items, setItems] = useState(() => {
    return new Map<string, ChatItemProps>(
      defaultValue
        // history message must has valid value
        ?.filter(({ content: _content, message: _message }) => !!_content && !!_message)
        .map((item) => [id(), item]),
    );
  });

  const submit = useCallback(() => {
    setMessage("");
    setItems((_items) => new Map(_items).set(id(), { message }));
  }, [id, message]);

  const styled = {
    chat: $props(styles.chat, typography.body.medium),
    messages: $props(styles.messages),
    footer: $props(styles.footer),
  };

  const messages = useMemo(() => Array.from(items.entries()), [items]);

  return (
    <Context.Provider value={{ classNames, onMessage }}>
      <div
        className={stringify(classNames.chat, className, styled.chat.className)}
        style={{
          ...styled.chat.style,
          ...style,
        }}
      >
        {messages.length > 0 && (
          <div
            className={stringify(classNames.messages, styled.messages.className)}
            style={styled.messages.style}
          >
            {messages.map(([key, item]) => {
              return <Item key={key} {...item} />;
            })}
          </div>
        )}

        <div
          className={stringify(classNames.footer, styled.footer.className)}
          style={styled.footer.style}
        >
          <Textarea value={message} onChange={setMessage} placeholder={placeholder} />

          <IconButton onClick={submit} disabled={!message} size="small">
            <RocketLaunch />
          </IconButton>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Chat;
