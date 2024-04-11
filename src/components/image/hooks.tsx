import React, { useMemo } from "react";
import type { OperationsProps, OperationEvent } from "./types";
import { SwapHoriz, SwapVert, RotateLeft, RotateRight, ZoomOut, ZoomIn } from "../icon/icons";
import { Button } from "../button";

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
        child: <SwapHoriz />,
        onClick: onFlipX,
        type: "flip-x",
      },
      {
        child: <SwapVert />,
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
        child: <ZoomOut />,
        onClick: onZoomOut,
        type: "zoom-out",
      },
      {
        child: <ZoomIn />,
        onClick: onZoomIn,
        type: "zoom-in",
      },
    ];
  }, [onFlipX, onFlipY, onRotateLeft, onRotateRight, onZoomIn, onZoomOut]);

  const handlers = useMemo(() => {
    return events.map(({ type, onClick, child }) => {
      return (
        <Button onClick={onClick} key={type} variant="text" shape="circular">
          {child}
        </Button>
      );
    });
  }, [events]);

  return handlers;
};
