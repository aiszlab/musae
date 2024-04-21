import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Dialog } from "../../dialog";
import Operations from "./operations";
import type { PreviewProps, PreviewRef } from "../types";
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

enum DefaultStyle {
  scale = 1,
  rotate = 0,
  flipX = 0,
  flipY = 0,
}

const Preview = forwardRef<PreviewRef, PreviewProps>(({ onClose, src, alt }, ref) => {
  const [scale, setScale] = useState(DefaultStyle.scale);
  const [rotate, setRotate] = useState(DefaultStyle.rotate);
  const [isFlipX, setFlipX] = useState(!!DefaultStyle.flipX);
  const [isFlipY, setFlipY] = useState(!!DefaultStyle.flipY);

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

  useImperativeHandle(
    ref,
    () => {
      return {
        reset: () => {
          setScale(DefaultStyle.scale);
          setRotate(DefaultStyle.rotate);
          setFlipX(!!DefaultStyle.flipX);
          setFlipY(!!DefaultStyle.flipY);
        },
      };
    },
    []
  );

  const styled = stylex.props(styles.image({ scale, rotate, flipX: isFlipX ? -1 : 1, flipY: isFlipY ? -1 : 1 }));
  const isSmallest = scale <= 1;

  return (
    <>
      <Dialog
        open
        onClose={onClose}
        footer={false}
        dismissable={["esc"]}
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
        <img src={src} className={styled.className} style={styled.style} alt={alt} />
      </Dialog>

      <Operations
        onZoomOut={isSmallest ? void 0 : onZoomOut}
        onZoomIn={onZoomIn}
        onRotateRight={onRotateRight}
        onRotateLeft={onRotateLeft}
        onFlipX={onFlipX}
        onFlipY={onFlipY}
        onClose={onClose}
      />
    </>
  );
});

export default Preview;
