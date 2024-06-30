import { useUpdateEffect } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";

type UsedAnimate = ReturnType<typeof useAnimate<HTMLElement>>;

/**
 * @description
 * effect for expand handler
 */
export const useExpandEffect = ({
  expanded,
  target,
  animate,
}: {
  expanded: boolean;
  target: UsedAnimate[0];
  animate: UsedAnimate[1];
}) => {
  useUpdateEffect(async () => {
    if (expanded) {
      target.current.style.height = "0";
      target.current.style.overflow = "hidden";
      target.current.style.display = "inherit";
      await animate(target.current, {
        height: "auto",
      });
      target.current.style.height = "";
      target.current.style.overflow = "";
      target.current.style.display = "";
      return;
    }

    // style play like display: none
    target.current.style.overflow = "hidden";
    target.current.style.height = "auto";
    target.current.style.display = "inherit";
    await animate(target.current, {
      height: 0,
    });
    target.current.style.height = "";
    target.current.style.overflow = "";
    target.current.style.display = "none";
  }, [expanded]);
};
