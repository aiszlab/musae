import { useEvent } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";

type UsedAnimate = ReturnType<typeof useAnimate<HTMLElement>>;

/**
 * @description
 * expand handler
 */
export const useExpandable = () => {
  const expand = useEvent(async ([element, animate]: UsedAnimate) => {
    // style play like display: none
    element.current.style.height = "0";
    element.current.style.overflow = "hidden";
    element.current.style.display = "inherit";
    await animate(element.current, {
      height: "auto",
    });
    element.current.style.height = "";
    element.current.style.overflow = "";
    element.current.style.display = "";
  });

  const collapse = useEvent(async ([element, animate]: UsedAnimate) => {
    element.current.style.overflow = "hidden";
    element.current.style.height = "auto";
    element.current.style.display = "inherit";
    await animate(element.current, {
      height: 0,
    });
    element.current.style.height = "";
    element.current.style.overflow = "";
    element.current.style.display = "none";
  });

  return {
    expand,
    collapse,
  };
};
