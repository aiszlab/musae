import { Notification, type Type } from "../notification";
import type { TypedMessage, MessageConfig, OpenHandler } from "./types";

const METHODS: Type[] = ["error", "info", "loading", "success", "warning"];

const Messager: TypedMessage = Object.assign(
  {
    open: (message: MessageConfig) => {
      Notification.open(message);
    },
  },
  ...METHODS.map((type) => ({
    [type]: ((message) => {
      return Notification.open({
        ...message,
        type,
      });
    }) satisfies OpenHandler,
  })),
);

export default Messager;
