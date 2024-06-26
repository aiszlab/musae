import React, { useContext } from "react";
import type { ImageProps } from "./types";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { useBoolean, useEvent, useImageLoader } from "@aiszlab/relax";

const Image = ({ src, alt, width, height }: ImageProps) => {
  const [isOpen, { turnOn, turnOff }] = useBoolean(false);
  const contextValue = useContext(PreviewGroupContext);

  const status = useImageLoader({ src });

  const click = useEvent(() => {
    // if current image is in preview group
    // just use preview group to preview image
    if (contextValue) {
      contextValue.onClick(src);
      return;
    }

    // not in preview group, render self
    turnOn();
  });

  return (
    <>
      {status === "loaded" && <img src={src} alt={alt} onClick={click} width={width} height={height} />}
      {isOpen && !contextValue && <Preview src={src} onClose={turnOff} alt={alt} />}
    </>
  );
};

export default Image;
