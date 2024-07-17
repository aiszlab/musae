import React, { useEffect } from "react";
import type { DrawerProps } from "./types";
import { Portal } from "../portal";
import Popup from "./popup";
import { useBoolean } from "@aiszlab/relax";

const Drawer = ({ open, size = 400, closable = true, placement = "right", ...props }: DrawerProps) => {
  /// `Portal` should disappear after `Dialog` disappear completely
  const [_isVisible, { turnOn, turnOff }] = useBoolean(false);

  useEffect(() => {
    if (open) {
      turnOn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Portal open={open || _isVisible} lockable>
      <Popup {...props} onClosed={turnOff} size={size} open={open} closable={closable} placement={placement} />
    </Portal>
  );
};

export default Drawer;
