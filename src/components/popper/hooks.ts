import { useCallback, useLayoutEffect, useMemo } from "react";
import { PopperProps } from "./types";
import { useAnimate } from "framer-motion";
import { useEvent } from "@aiszlab/relax";

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
  const [_floatable, animate] = useAnimate<HTMLDivElement>();

  const appear = useEvent(async () => {
    _floatable.current.style.display = "";
    await animate(_floatable.current, { opacity: 1, transform: "scale(1, 1)" }, { duration: 0.2 });
    await onEntered?.();
  });

  const disappear = useEvent(async () => {
    await Promise.all([
      onExit?.(),
      animate(_floatable.current, { opacity: 0, transform: "scale(0, 0)" }, { duration: 0.2 }).then(
        () => {
          if (!_floatable.current) return;
          _floatable.current.style.display = "none";
        },
      ),
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
    floatable: _floatable,
    disappear,
  };
};
