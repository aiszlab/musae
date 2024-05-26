import { type ReactNode } from "react";
import type { Messager } from "./types";
import { useNotification } from "../notification";

/**
 * @author murukal
 *
 * @description
 * hook for message
 */
export const useMessage = (): [Messager, ReactNode] => {
  const [notifier, holder] = useNotification();
  return [notifier, holder];
};
