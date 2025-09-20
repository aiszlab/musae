import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Dialog } from "../../dialog";
import Operations from "./operations";
import type { PreviewProps, PreviewRef } from "../../../types/image";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration } from "../../theme/tokens.stylex";

const styles = $create({
  image: (props: { scale: number; rotate: number; flipX: number; flipY: number }) => ({
    transform: `translate3d(0px, 0px, 0px) scale3d(${props.scale * props.flipX}, ${
      props.scale * props.flipY
    }, 1) rotate(${props.rotate}deg)`,
    willChange: "transform",
    transitionProperty: "transform",
    transitionDuration: duration.short,
    pointerEvents: "auto",
  }),
});

const DEFAULT_STYLE = {
  scale: 1,
  rotate: 0,
  flipX: 0,
  flipY: 0,
} as const;

const Preview = forwardRef<PreviewRef, PreviewProps>(({ onClose, src, alt }, ref) => {
  const [scale, setScale] = useState<number>(DEFAULT_STYLE.scale);
  const [rotate, setRotate] = useState<number>(DEFAULT_STYLE.rotate);
  const [isFlipX, setFlipX] = useState<boolean>(!!DEFAULT_STYLE.flipX);
  const [isFlipY, setFlipY] = useState<boolean>(!!DEFAULT_STYLE.flipY);

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
          setScale(DEFAULT_STYLE.scale);
          setRotate(DEFAULT_STYLE.rotate);
          setFlipX(!!DEFAULT_STYLE.flipX);
          setFlipY(!!DEFAULT_STYLE.flipY);
        },
      };
    },
    [],
  );

  const styled = $props(
    styles.image({ scale, rotate, flipX: isFlipX ? -1 : 1, flipY: isFlipY ? -1 : 1 }),
  );
  const isSmallest = scale <= 1;

  return (
    <>
      <Dialog
        open
        onClose={onClose}
        footer={false}
        closable={["esc", "overlay"]}
        styles={{
          panel: {
            backgroundColor: "transparent",
            margin: 0,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            pointerEvents: "none",
          },
          body: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            pointerEvents: "none",
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
