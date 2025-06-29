import React, { useContext, useEffect, useRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { computePosition, size, autoUpdate, offset } from "@floating-ui/dom";
import { create as $create, props as $props } from "@stylexjs/stylex";
import type { SpotlightProps } from "../../types/tour";
import { duration, sizes } from "../theme/tokens.stylex";
import { Context } from "./context";

const styles = $create({
  spotlight: {
    backgroundColor: "#808080",
    borderRadius: sizes.xxxxxxxsmall,
    transitionProperty: "transform",
    transitionDuration: duration.short,
    willChange: "transform",
    display: "none",
  },
});

const Spotlight = ({ trigger, padding: [paddingY, paddingX] }: SpotlightProps) => {
  const floatable = useRef<HTMLDivElement>(null);
  const { classNames } = useContext(Context);

  // auto update: calc trigger dom to get position
  // if trigger changed, re-relate
  useEffect(() => {
    const _floatable = floatable.current;

    if (!trigger) return;
    if (!_floatable) return;

    const cleanup = autoUpdate(trigger, _floatable, () => {
      computePosition(trigger, _floatable, {
        placement: "bottom",
        middleware: [
          size({
            apply: ({ rects, elements }) => {
              elements.floating.style.height = `${rects.reference.height + paddingY * 2}px`;
              elements.floating.style.width = `${rects.reference.width + paddingX * 2}px`;
            },
          }),
          offset(({ rects }) => {
            return -rects.reference.height / 2 - rects.floating.height / 2;
          }),
        ],
      })
        .then(({ x, y }) => {
          _floatable.style.transform = `translate(${x}px, ${y}px)`;
          _floatable.style.display = "block";
        })
        .catch(() => null);
    });

    return () => {
      cleanup();
    };
  }, [trigger, paddingY, paddingX]);

  const styled = $props(styles.spotlight);

  return (
    <div
      ref={floatable}
      className={stringify(classNames.spotlight, styled.className)}
      style={styled.style}
    />
  );
};

export default Spotlight;
