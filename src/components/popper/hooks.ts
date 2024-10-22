import { useEffect, useMemo, useRef } from "react";
import type { DropdownProps, PopperProps } from "musae/types/popper";
import { useAnimate } from "framer-motion";
import { useComposedRef, useEvent } from "@aiszlab/relax";
import { useContainer } from "../../hooks/use-container";
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
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
 * floating position
 */
export const useFloating = ({
  open,
  trigger: _trigger,
  placement,
  arrowable,
  offset: _offset,
  onEntered,
  onExit,
  onExited,
  disappearable,
}: {
  open: boolean;
  trigger: DropdownProps["trigger"];
  placement: DropdownProps["placement"];
  arrowable: boolean;
  offset: DropdownProps["offset"];
  onEntered?: () => Promise<void> | void;
  onExit?: () => Promise<void> | void;
  onExited?: () => Promise<void> | void;
  disappearable: boolean;
}) => {
  const [_scope, animate] = useAnimate<HTMLDivElement>();
  const floatableRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const composedRef = useComposedRef(_scope, floatableRef);

  const { container: trigger } = useContainer({ container: _trigger, useBody: false }, [open]);
  const _isOpen = useRef<boolean>(false);

  // appear animation
  // prevent open again when opened
  // first remove `display: none` style
  // then animate
  const appear = useEvent(async () => {
    if (_isOpen.current) return;
    const _floatable = floatableRef.current;
    if (!_floatable) return;

    _isOpen.current = true;

    _floatable.style.display = "unset";
    await animate(_scope.current, { opacity: 1 }, { duration: 0.2 });
    await onEntered?.();
  });

  // disappear animation
  // prevent disappear again when disappeared
  // when using force disappear, it will be forced to disappear
  const disappear = useEvent(async (force: boolean = false) => {
    if (!_isOpen.current) return;
    if (!force && !disappearable) return;
    const _floatable = floatableRef.current;
    if (!_floatable) return;

    _isOpen.current = false;

    await Promise.all([
      onExit?.(),
      animate(_scope.current, { opacity: 0 }, { duration: 0.2 }).then(() => {
        _floatable.style.display = "none";
      }),
    ]);
    await onExited?.();
  });

  // memorized offsets
  const offsets = useOffsets({ offset: _offset, arrowable });

  // position listener
  const position = useEvent(() => {
    if (!trigger) return;
    const _floatable = floatableRef.current;
    if (!_floatable) return;

    const cleanup = autoUpdate(trigger, _floatable, () => {
      computePosition(trigger, _floatable, {
        placement,
        middleware: [
          flip(),
          shift(),
          offset(offsets),
          arrowable && !!arrowRef.current && arrow({ element: arrowRef.current, padding: 16 }),
        ],
      })
        .then(({ x, y, middlewareData, placement: _placement }) => {
          const [side] = _placement.split("-") as [Side, Alignment?];

          // set float element styles
          _floatable.style.translate = `${x}px ${y}px`;

          // set arrow styles
          if (middlewareData.arrow && !!arrowRef.current) {
            const offsetY = `${middlewareData.arrow.y ?? 0 - 8}px`;
            const offsetX = `${middlewareData.arrow.x ?? 0}px`;

            arrowRef.current.style.insetInlineStart = offsetX;
            side === "top" && (arrowRef.current.style.insetBlockEnd = offsetY);
            side === "bottom" && (arrowRef.current.style.insetBlockStart = offsetY);
          }

          // use appear animation
          appear();
        })
        .catch(() => null);
    });

    return cleanup;
  });

  // auto update: calc trigger dom to get position
  // if trigger changed, re-relate
  useEffect(() => {
    if (open) {
      const cleanup = position();
      return () => {
        cleanup?.();
      };
    }

    disappear();
  }, [disappear, open, position]);

  return {
    floatableRef,
    composedRef,
    arrowRef,
    disappear,
  };
};
