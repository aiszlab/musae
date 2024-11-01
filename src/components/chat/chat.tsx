import React, { useCallback, useRef } from "react";
import { Textarea } from "../textarea";
import { Button } from "../button";

const Chat = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submit = useCallback(() => {
    const message = textareaRef.current?.value;
  }, []);

  return (
    <div>
      <Textarea ref={textareaRef} />
      <Button onClick={submit}>submit</Button>
    </div>
  );
};

export default Chat;
