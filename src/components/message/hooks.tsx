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
  return useNotification();
};
