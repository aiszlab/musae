import React, { useMemo } from "react";
import type { OperationsProps, OperationEvent } from "../../types/image";
import {
  IconSwapHoriz,
  IconSwapVert,
  RotateLeft,
  RotateRight,
  IconZoomOut,
  IconZoomIn,
} from "../icon/icons";
import { IconButton } from "../icon-button";

/**
 * @description
 * handlers
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
        child: <IconSwapHoriz />,
        onClick: onFlipX,
        type: "flip-x",
      },
      {
        child: <IconSwapVert />,
        onClick: onFlipY,
        type: "flip-y",
      },
      {
        child: <RotateLeft />,
        onClick: onRotateLeft,
        type: "rotate-left",
      },
      {
        child: <RotateRight />,
        onClick: onRotateRight,
        type: "rotate-right",
      },
      {
        child: <IconZoomOut />,
        onClick: onZoomOut,
        type: "zoom-out",
      },
      {
        child: <IconZoomIn />,
        onClick: onZoomIn,
        type: "zoom-in",
      },
    ];
  }, [onFlipX, onFlipY, onRotateLeft, onRotateRight, onZoomIn, onZoomOut]);

  const handlers = useMemo(() => {
    return events.map(({ type, onClick, child }) => {
      return (
        <IconButton onClick={onClick} key={type} variant="text" disabled={!onClick}>
          {child}
        </IconButton>
      );
    });
  }, [events]);

  return handlers;
};
