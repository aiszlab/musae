import { useMemo } from "react";
import type { Logo } from "./types";

/**
 * @description
 * logo
 */
export const useLogo = (logo?: string | Logo) => {
  return useMemo<Logo | null>(() => {
    if (!logo) return null;

    if (typeof logo === "string") {
      return {
        url: logo,
      };
    }

    return logo;
  }, [logo]);
};

/**
 * @description
 * menu
 */
export const useMenus = () => {};
