import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import type { DropdownProps, PopperProps } from "musae/types/popper";
import { useAnimate } from "framer-motion";
import { useEvent } from "@aiszlab/relax";
import { useContainer } from "../../hooks/use-container";
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  size,
  type Side,
  type Alignment,
} from "@floating-ui/dom";

/**
 * @description
 * offset converter
 */
export const useOffsets = ({
  offset = 0,
  arrowable,
}: {
  offset: PopperProps["offset"];
  arrowable: boolean;
}) => {
  const mainAxis = typeof offset === "number" ? offset : offset.mainAxis;
  const crossAxis = typeof offset === "number" ? 0 : offset.crossAxis;
  const alignmentAxis = typeof offset === "number" ? null : offset.alignmentAxis;

  return useMemo<Exclude<PopperProps["offset"], number | undefined>>(() => {
    return {
      mainAxis: 8 + (mainAxis ?? 0) + (arrowable ? 8 : 0),
      crossAxis,
      alignmentAxis,
    };
  }, [mainAxis, crossAxis, alignmentAxis, arrowable]);
};

/**
 * @description
 * use animation
 */
export const useAnimation = ({
  open,
  disappearable,
  onEntered,
  onExit,
  onExited,
}: { open: boolean; disappearable: boolean } & Pick<
  PopperProps,
  "onEntered" | "onExit" | "onExited"
>) => {
  const [animatableRef, animate] = useAnimate<HTMLDivElement>();

  const appear = useEvent(async () => {
    animatableRef.current.style.display = "";
    await animate(
      animatableRef.current,
      { opacity: 1, transform: "scale(1, 1)" },
      { duration: 0.2 },
    );
    await onEntered?.();
  });

  const disappear = useEvent(async () => {
    await Promise.all([
      onExit?.(),
      animate(
        animatableRef.current,
        { opacity: 0, transform: "scale(0, 0)" },
        { duration: 0.2 },
      ).then(() => {
        if (!animatableRef.current) return;
        animatableRef.current.style.display = "none";
      }),
    ]);
    await onExited?.();
  });

  const _disappear = useCallback(() => {
    if (!disappearable) return;
    disappear();
  }, [disappear, disappearable]);

  useLayoutEffect(() => {
    if (open) {
      appear();
      return;
    }
    _disappear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return {
    animatableRef,
    disappear,
  };
};

/**
 * @description
 * floating position
 */
export const useFloating = ({
  open,
  trigger: _trigger,
  placement,
  arrowable,
  offset: _offset,
}: {
  open: boolean;
  trigger: DropdownProps["trigger"];
  placement: DropdownProps["placement"];
  arrowable: boolean;
  offset: DropdownProps["offset"];
}) => {
  const floatableRef = useRef<HTMLDivElement>(null);
  const { container: trigger } = useContainer({ container: _trigger, useBody: false }, [open]);
  const arrowRef = useRef<HTMLDivElement>(null);

  // memorized offsets
  const offsets = useOffsets({ offset: _offset, arrowable });

  // auto update: calc trigger dom to get position
  // if trigger changed, re-relate
  useLayoutEffect(() => {
    const floatable = floatableRef.current;

    if (!trigger) return;
    if (!floatable) return;

    const cleanup = autoUpdate(trigger, floatable, () => {
      computePosition(trigger, floatable, {
        placement,
        middleware: [
          flip(),
          offset(offsets),
          arrowable && !!arrowRef.current && arrow({ element: arrowRef.current, padding: 16 }),
          size({
            apply({ availableWidth, availableHeight, elements: { floating } }) {
              floating.style.maxWidth = `${availableWidth}px`;
              floating.style.maxHeight = `${availableHeight}px`;
            },
          }),
        ],
      })
        .then(({ x, y, middlewareData, placement: _placement }) => {
          const [side] = _placement.split("-") as [Side, Alignment?];

          // set float element styles
          floatable.style.translate = `${x}px ${y}px`;

          // set arrow styles
          if (middlewareData.arrow && !!arrowRef.current) {
            const offsetY = `${middlewareData.arrow.y ?? 0 - 8}px`;
            const offsetX = `${middlewareData.arrow.x ?? 0}px`;

            arrowRef.current.style.insetInlineStart = offsetX;
            side === "top" && (arrowRef.current.style.insetBlockEnd = offsetY);
            side === "bottom" && (arrowRef.current.style.insetBlockStart = offsetY);
          }
        })
        .catch(() => null)
        .then(() => {
          requestAnimationFrame(() => {
            floatable.style.transitionProperty = "translate";
            floatable.style.transitionDuration = "0.1s";
          });
        });
    });

    return () => {
      cleanup();
    };
  }, [placement, trigger, offsets, arrowable]);

  return {
    floatableRef,
    arrowRef,
  };
};
