import { Portal } from "../portal";
import React from "react";
import type { DialogProps } from "./types";
import Popup from "./popup";

const Dialog = ({ isOpened, ...props }: DialogProps) => {
  return (
    <Portal isVisible={isOpened}>
      <Popup isOpened={isOpened} {...props} />
    </Portal>
  );
};

export default Dialog;
