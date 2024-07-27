import { createElement } from "react";
import { createRoot } from "react-dom/client";
import Holder from "./holder";
import type { HolderRef, NotificationConfig, OpenHandler, Type, TypedNotification } from "./types";
import Notification from "./notification";

const METHODS: Type[] = ["error", "info", "success", "warning"];

export class Notifier {
  // singleton mode
  static #notifier: Notifier | null = null;

  #holder: HolderRef | null = null;

  constructor() {
    return (Notifier.#notifier ??= this);
  }

  open(notification: NotificationConfig) {
    if (!this.#holder) {
      createRoot(document.createDocumentFragment()).render(
        createElement(Holder, {
          ref: (holder) => {
            this.#holder = holder;
          },
          defaultNotifications: [notification],
        }),
      );
      return;
    }

    this.#holder.add(notification);
  }
}

const _Notification: TypedNotification = Object.assign(
  Notification,
  { open: (notification: NotificationConfig) => new Notifier().open(notification) },
  ...METHODS.map((type) => ({
    [type]: (async (notification) => {
      new Notifier().open({ ...notification, type });
    }) satisfies OpenHandler,
  })),
);

export default _Notification;
