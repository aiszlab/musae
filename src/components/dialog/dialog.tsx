import { Portal } from "../portal";
import React, { useEffect } from "react";
import type { DialogProps } from "./types";
import Popup from "./popup";
import { useBoolean } from "@aiszlab/relax";

const Dialog = ({ open, ...props }: DialogProps) => {
  /// `Portal` should disappear after `Dialog` disappear completely
  const [_isVisible, { turnOn, turnOff }] = useBoolean(false);

  useEffect(() => {
    if (open) {
      turnOn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Portal open={open || _isVisible}>
      <Popup open={open} onClosed={turnOff} {...props} />
    </Portal>
  );
};

export default Dialog;
