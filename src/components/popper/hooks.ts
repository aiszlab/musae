import { type CSSProperties, useMemo } from "react";
import { PopperClassToken } from "../../utils/class-name";

/**
 * @description
 * initial style
 */
export const useStyles = () => {
  return useMemo<Record<PopperClassToken, CSSProperties>>(() => {
    return {
      [PopperClassToken.Dropdown]: {
        display: "none",
        opacity: 0,
      },
    };
  }, []);
};
