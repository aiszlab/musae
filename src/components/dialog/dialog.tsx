import { Portal } from "../portal";
import React, { useEffect, useRef } from "react";
import type { DialogProps } from "../../types/dialog";
import Popup from "./popup";
import { useBoolean, useEvent } from "@aiszlab/relax";
import { Voidable } from "@aiszlab/relax/types";
import { DialogContext } from "./context";

const Dialog = ({ open, closable = true, ...props }: DialogProps) => {
  // `Portal` should disappear after `Dialog` disappear animation completely
  const [_isVisible, { turnOn, turnOff }] = useBoolean(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      turnOn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const containerGetter = useEvent<() => Voidable<HTMLElement>>(() => {
    return popupRef.current;
  });

  return (
    <DialogContext value={{ container: containerGetter }}>
      <Portal open={open || _isVisible} lockable>
        <Popup {...props} closable={closable} open={open} onClosed={turnOff} ref={popupRef} />
      </Portal>
    </DialogContext>
  );
};

export default Dialog;
