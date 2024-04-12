import React, { useContext } from "react";
import type { ImageProps } from "./types";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { useBoolean, useEvent } from "@aiszlab/relax";

const Image = ({ src, alt, width, height }: ImageProps) => {
  const [isVisible, { turnOn, turnOff }] = useBoolean(false);
  const contextValue = useContext(PreviewGroupContext);

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
      <img src={src} alt={alt} onClick={click} width={width} height={height} />
      {isVisible && !contextValue && <Preview src={src} onClose={turnOff} alt={alt} />}
    </>
  );
};

export default Image;
