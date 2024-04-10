import React from "react";
import type { ImageProps } from "./types";
import Preview from "./preview/preview";
import { useBoolean } from "@aiszlab/relax";

const Image = ({ src, alt }: ImageProps) => {
  const [isVisible, { turnOn, turnOff }] = useBoolean(false);

  return (
    <>
      <img src={src} alt={alt} onClick={turnOn} />
      {isVisible && <Preview src={src} onClose={turnOff} alt={alt} />}
    </>
  );
};

export default Image;
