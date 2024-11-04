import React, { useCallback, useState } from "react";
import { Textarea } from "../textarea";
import { Button } from "../button";
import { useIdentity } from "@aiszlab/relax";
import Item from "./item";
import { useClassNames } from "../../hooks/use-class-names.component";
import { CLASS_NAMES, Context } from "./context";
import type { ChatItemProps } from "../../types/chat";
import stylex from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  chat: {
    position: "relative",
  },

  footer: {
    position: "sticky",
    insetBlockEnd: 0,
    display: "flex",
    flexDirection: "row",
    gap: spacing.medium,
  },
});

const Chat = () => {
  const classNames = useClassNames(CLASS_NAMES);
  const [, id] = useIdentity();
  const [message, setMessage] = useState("");
  const [items, setItems] = useState(new Map<string, ChatItemProps>());

  const submit = useCallback(() => {
    setMessage("");
    setItems((_items) => new Map(_items).set(id(), { message }));
  }, [id, message]);

  const styled = {
    chat: stylex.props(styles.chat, typography.body.medium),
    footer: stylex.props(styles.footer),
  };

  return (
    <Context.Provider value={{ classNames }}>
      <div className={stringify(classNames.chat, styled.chat.className)} style={styled.chat.style}>
        {Array.from(items.entries()).map(([key, item]) => {
          return <Item key={key} message={item.message} />;
        })}

        <div
          className={stringify(classNames.footer, styled.footer.className)}
          style={styled.footer.style}
        >
          <Textarea value={message} onChange={setMessage} />

          <Button onClick={submit} disabled={!message}>
            submit
          </Button>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Chat;
