import { useEvent } from "@aiszlab/relax";
import { animate } from "motion/react";
import { useRef } from "react";

/**
 * @description
 * expand handler
 */
export const useExpandable = <E extends HTMLElement>() => {
  const ref = useRef<E>(null);

  const expand = useEvent(async () => {
    const _element = ref.current;
    if (!_element) return;

    // style play like display: none
    _element.style.height = "0";
    _element.style.overflow = "hidden";
    _element.style.display = "inherit";
    await animate(_element, {
      height: "auto",
    });
    _element.style.height = "";
    _element.style.overflow = "";
    _element.style.display = "";
  });

  const collapse = useEvent(async () => {
    const _element = ref.current;
    if (!_element) return;

    _element.style.overflow = "hidden";
    _element.style.height = "auto";
    _element.style.display = "inherit";
    await animate(_element, {
      height: 0,
    });
    _element.style.height = "";
    _element.style.overflow = "";
    _element.style.display = "none";
  });

  return {
    expand,
    collapse,
    ref,
  };
};
