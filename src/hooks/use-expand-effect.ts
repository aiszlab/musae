import { useUpdateEffect } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";

type UsedAnimate = ReturnType<typeof useAnimate<HTMLUListElement>>;

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
      target.current.attributeStyleMap.set("height", 0);
      target.current.attributeStyleMap.set("overflow", "hidden");
      target.current.attributeStyleMap.set("display", "block");
      await animate(target.current, {
        height: "auto",
      });
      target.current.attributeStyleMap.clear();
      return;
    }

    // style play like display: none
    target.current.attributeStyleMap.set("overflow", "hidden");
    target.current.attributeStyleMap.set("height", "auto");
    target.current.attributeStyleMap.set("display", "block");
    await animate(target.current, {
      height: 0,
    });
    target.current.attributeStyleMap.clear();
  }, [expanded]);
};
