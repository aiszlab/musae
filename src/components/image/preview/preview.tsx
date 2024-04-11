import React, { useState } from "react";
import { Dialog } from "../../dialog";
import Operations from "./operations";
import type { PreviewProps } from "../types";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  image: (props: { scale: number; rotate: number; flipX: number; flipY: number }) => ({
    transform: `translate3d(0px, 0px, 0px) scale3d(${props.scale * props.flipX}, ${
      props.scale * props.flipY
    }, 1) rotate(${props.rotate}deg)`,
    willChange: "transform",
    transition: "transform 0.2s",
  }),
});

const Preview = ({ onClose, src, ...props }: PreviewProps) => {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [isFlipX, setFlipX] = useState(false);
  const [isFlipY, setFlipY] = useState(false);

  const onSwitchLeft = () => {};
  const onSwitchRight = () => {};

  const onZoomOut = () => {
    setScale((prev) => Math.max(prev / 1.5, 1));
  };
  const onZoomIn = () => {
    setScale((prev) => prev * 1.5);
  };
  const onRotateLeft = () => {
    setRotate((prev) => prev - 90);
  };
  const onRotateRight = () => {
    setRotate((prev) => prev + 90);
  };
  const onFlipX = () => {
    setFlipX((prev) => !prev);
  };
  const onFlipY = () => {
    setFlipY((prev) => !prev);
  };

  const styled = stylex.props(styles.image({ scale, rotate, flipX: isFlipX ? -1 : 1, flipY: isFlipY ? -1 : 1 }));

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
            margin: 0,
            width: "100%",
            height: "100%",
            maxHeight: "100%",
          },
          body: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <img src={src} className={styled.className} style={styled.style} />
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
