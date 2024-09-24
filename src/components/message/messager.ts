import { Notification, type Type } from "../notification";
import type { TypedMessage, MessageConfig, OpenHandler } from "musae/types/message";

const METHODS: Type[] = ["error", "info", "loading", "success", "warning"];

const Message: TypedMessage = Object.assign(
  {
    open: (message: MessageConfig) => {
      Notification.open(message);
    },
  },
  ...METHODS.map((type) => ({
    [type]: ((message) => {
      return Notification.open({
        ...message,
        placement: "top",
        type,
      });
    }) satisfies OpenHandler,
  })),
);

export default Message;
