import React, { useContext, useEffect, useRef } from "react";
import { clsx } from "@aiszlab/relax";
import { computePosition, size, autoUpdate, offset } from "@floating-ui/dom";
import stylex from "@stylexjs/stylex";
import { SpotlightProps } from "musae/types/tour";
import { sizes } from "../theme/tokens.stylex";
import { Context } from "./context";

const styles = stylex.create({
  spotlight: {
    backgroundColor: "#808080",
    borderRadius: sizes.xxxxxsmall,
    transitionProperty: "transform",
    transitionDuration: "0.2s",
    willChange: "transform",
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
        })
        .catch(() => null);
    });

    return () => {
      cleanup();
    };
  }, [trigger, paddingY, paddingX]);

  const styled = stylex.props(styles.spotlight);

  return (
    <div
      ref={floatable}
      className={clsx(classNames.spotlight, styled.className)}
      style={styled.style}
    />
  );
};

export default Spotlight;
