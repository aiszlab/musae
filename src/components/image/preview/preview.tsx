import React from "react";
import { Dialog } from "../../dialog";
import Operations from "./operations";
import type { PreviewProps } from "../types";

const Preview = ({ onClose, src, alt, ...props }: PreviewProps) => {
  const onSwitchLeft = () => {};
  const onSwitchRight = () => {};
  const onZoomIn = () => {};
  const onZoomOut = () => {};
  const onRotateRight = () => {};
  const onRotateLeft = () => {};
  const onFlipX = () => {};
  const onFlipY = () => {};

  return (
    <>
      <Dialog
        open
        onClose={onClose}
        footer={false}
        dismissable={["mask", "esc"]}
        styles={{
          panel: {
            backgroundColor: "transparent",
          },
        }}
      >
        <img src={src} alt={alt} />
      </Dialog>

      <Operations
        onSwitchLeft={onSwitchLeft}
        onSwitchRight={onSwitchRight}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onRotateRight={onRotateRight}
        onRotateLeft={onRotateLeft}
        onFlipX={onFlipX}
        onFlipY={onFlipY}
        onClose={onClose}
      />
    </>
  );
};

export default Preview;
