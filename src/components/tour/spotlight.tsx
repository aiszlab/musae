import React, { useEffect, useMemo, useRef } from "react";
import { isFunction } from "@aiszlab/relax";
import { computePosition, size, autoUpdate, offset } from "@floating-ui/dom";
import { Nullable } from "@aiszlab/relax/types";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, TourClassToken } from "../../utils/class-name";
import { SpotlightProps } from "./types";

const styles = stylex.create({
  spotlight: { backgroundColor: "#808080" },
});

const Spotlight = ({ trigger: _trigger, padding: [paddingY, paddingX] }: SpotlightProps) => {
  const floatable = useRef<HTMLDivElement>(null);
  const classNames = useClassNames(ComponentToken.Tour);

  /// how to get trigger
  const trigger = useMemo<Nullable<Element>>(() => {
    if (isFunction(_trigger)) return _trigger();
    return _trigger ?? null;
  }, [_trigger]);

  /// auto update: calc trigger dom to get position
  /// if trigger changed, re-relate
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
      className={clsx(classNames[TourClassToken.Spotlight], styled.className)}
      style={styled.style}
    />
  );
};

export default Spotlight;
