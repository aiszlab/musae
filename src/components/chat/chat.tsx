import React, { useCallback, useState } from "react";
import { Textarea } from "../textarea";
import { Button } from "../button";
import { useIdentity } from "@aiszlab/relax";
import Item from "./item";

const Chat = () => {
  const [, id] = useIdentity();
  const [message, setMessage] = useState("");

  const [items, setItems] = useState(
    new Map<
      string,
      {
        message: string;
      }
    >(),
  );

  const submit = useCallback(() => {
    setMessage("");
    setItems((_items) => new Map(_items).set(id(), { message }));
  }, []);

  return (
    <div>
      {items.entries().map(([key, item]) => {
        return <Item key={key} message={item.message} />;
      })}

      <Textarea />

      <Button onClick={submit} disabled={!!message}>
        submit
      </Button>
    </div>
  );
};

export default Chat;
