import React, { useEffect } from "react";
import type { DrawerProps } from "./types";
import { Portal } from "../portal";
import Popup from "./popup";
import { useBoolean } from "@aiszlab/relax";

const Drawer = ({ open, ...props }: DrawerProps) => {
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
      <Popup open={open} {...props} onClosed={turnOff} />
    </Portal>
  );
};

export default Drawer;
