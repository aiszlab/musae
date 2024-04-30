import React, { CSSProperties, useEffect, useMemo } from "react";
import type { TourProps } from "./types";
import { Portal } from "../portal";
import { isFunction, useCounter } from "@aiszlab/relax";
import { Popper } from "../popper";
import stylex from "@stylexjs/stylex";
import { Button } from "../button";

const styles = stylex.create({
  overlay: {
    inset: 0,
    mixBlendMode: "hard-light",
  },

  spotlight: {
    color: "gray",
  },
});

const Tour = ({ steps = [], open = false, onClose }: TourProps) => {
  const [current, { add, subtract, reset }] = useCounter(0, { min: 0, max: steps.length });
  const currentAt = steps[current];

  const styled = {
    overlay: stylex.props(styles.overlay),
    spotlight: stylex.props(styles.spotlight),
  };

  /// current target
  const target = isFunction(currentAt.target) ? currentAt.target() : currentAt.target;

  const spotlightStyles = useMemo<CSSProperties>(() => {
    const { left, top, width, height } = target.getBoundingClientRect();
    return {
      left: left - 12,
      top: top - 12,
      width: width + 24,
      height: height + 24,
    };
  }, [target]);

  /// close handler
  const close = () => {
    onClose?.();
  };

  const next = () => {
    add();
  };

  const prev = () => {
    subtract();
  };

  useEffect(() => {
    if (open) {
      reset();
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <Portal open={open}>
        <div className={styled.overlay.className} style={styled.overlay.style}>
          <div
            className={styled.spotlight.className}
            style={{
              ...styled.spotlight.style,
              ...spotlightStyles,
            }}
          />
        </div>
      </Portal>

      <Popper trigger={target} open={open}>
        <div>
          <div>{currentAt.title}</div>
          <div>{currentAt.description}</div>

          <div className="footer">
            <Button onClick={prev}>上一步</Button>
            <Button onClick={next}>下一步</Button>
            <Button onClick={close}>结束</Button>
          </div>
        </div>
      </Popper>
    </>
  );
};

export default Tour;
