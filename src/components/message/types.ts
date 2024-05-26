import type { Notifier } from "../notification";
import type { NotificationConfig } from "../notification/types";

type Open = (config: Omit<NotificationConfig, "type" | "title">) => Promise<void>;

/**
 * @author murukal
 *
 * @description
 * messager
 */
export type Messager = Record<keyof Notifier, Open>;
