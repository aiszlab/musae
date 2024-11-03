import { useMounted } from "@aiszlab/relax";
import React, { useState } from "react";
import { fetchEventSource } from "@aiszlab/relax/fetch-event-source";

const Item = ({ message }: { message: string }) => {
  const [content, setContent] = useState("");

  useMounted(() => {
    if (!message) return;

    fetchEventSource("http://localhost:3100/api/chat", {
      body: JSON.stringify({
        message,
      }),
    });
  });

  return (
    <div>
      <p>{message}</p>
      <p>{content}</p>
    </div>
  );
};

export default Item;
