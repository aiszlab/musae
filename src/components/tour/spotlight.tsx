import React, { useEffect, useMemo, useRef } from "react";
import { isFunction } from "@aiszlab/relax";
import { computePosition, size, autoUpdate, offset } from "@floating-ui/dom";
import { Nullable } from "@aiszlab/relax/types";
import { PopperProps } from "../popper/types";
import stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { useClassNames } from "../config";
import { ComponentToken, TourClassToken } from "../../utils/class-name";

const styles = stylex.create({
  spotlight: { backgroundColor: "gray" },
});

const Spotlight = ({ trigger: _trigger, ...props }: Pick<PopperProps, "trigger">) => {
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
              elements.floating.style.width = `${rects.reference.width}px`;
              elements.floating.style.height = `${rects.reference.height}px`;
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
      // reset rect styles
      _floatable.style.width = "";
      _floatable.style.height = "";
      // cleanup listener
      cleanup();
    };
  }, [trigger]);

  const styled = stylex.props(styles.spotlight);

  return (
    <div
      ref={floatable}
      {...props}
      className={clsx(classNames[TourClassToken.Spotlight], styled.className)}
      style={styled.style}
    />
  );
};

export default Spotlight;
