import React from "react";
import { Dialog } from "../../dialog";
import Operations from "./operations";

interface Props {
  src: string;
  total: number;
}

const Preview = (props: Props) => {
  const onSwitchLeft = () => {};
  const onSwitchRight = () => {};
  const onZoomIn = () => {};
  const onZoomOut = () => {};
  const onRotateRight = () => {};
  const onRotateLeft = () => {};
  const onFlipX = () => {};
  const onFlipY = () => {};
  const onClose = () => {};

  return (
    <>
      <Dialog open>
        <img src={props.src} />
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
