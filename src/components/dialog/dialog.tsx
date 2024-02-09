import { Portal } from "../portal";
import React from "react";
import type { DialogProps } from "./types";
import Popup from "./popup";

const Dialog = ({ open, ...props }: DialogProps) => {
  return (
    <Portal open={open}>
      <Popup open={open} {...props} />
    </Portal>
  );
};

export default Dialog;
