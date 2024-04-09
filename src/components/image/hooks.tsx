import React, { useMemo } from "react";
import type { OperationsProps, OperationEvent } from "./types";
import { CheckCircle } from "../icon/icons";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  handler: {
    userSelect: "none",
    cursor: "pointer",
  },
});

/**
 * @description
 * handlers
 *
 * // TODO add different handler icon, deps on musae/icons
 */
export const useHandlers = ({
  onZoomIn,
  onZoomOut,
  onRotateRight,
  onRotateLeft,
  onFlipX,
  onFlipY,
}: Omit<OperationsProps, "onClose" | "onSwitchLeft" | "onSwitchRight">) => {
  const events = useMemo<OperationEvent[]>(() => {
    return [
      {
        child: <CheckCircle />,
        onClick: onFlipX,
        type: "flip-x",
      },
      {
        child: <CheckCircle />,
        onClick: onFlipY,
        type: "flip-y",
      },
      {
        child: <CheckCircle />,
        onClick: onRotateLeft,
        type: "rotate-left",
      },
      {
        child: <CheckCircle />,
        onClick: onRotateRight,
        type: "rotate-right",
      },
      {
        child: <CheckCircle />,
        onClick: onZoomOut,
        type: "zoom-out",
      },
      {
        child: <CheckCircle />,
        onClick: onZoomIn,
        type: "zoom-in",
      },
      {
        child: <CheckCircle />,
        onClick: onFlipX,
        type: "flip",
      },
      {
        child: <CheckCircle />,
        onClick: onFlipX,
        type: "flip",
      },
    ];
  }, []);

  const handlers = useMemo(() => {
    const styled = stylex.props(styles.handler);

    return events.map(({ type, onClick, child }) => {
      return (
        <div className={styled.className} style={styled.style} onClick={onClick} key={type}>
          {child}
        </div>
      );
    });
  }, [events]);

  return handlers;
};
