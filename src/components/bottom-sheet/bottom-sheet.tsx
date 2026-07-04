import React, { useEffect } from "react";
import { useBoolean } from "@aiszlab/relax";
import type { BottomSheetProps } from "../../types/bottom-sheet";
import { Portal } from "../portal";
import Sheet from "./sheet";

const BottomSheet = ({
  open,
  height = "50vh",
  closable = true,
  ...props
}: BottomSheetProps) => {
  // Keep Portal mounted during exit animation
  const [isVisible, { turnOn, turnOff }] = useBoolean(false);

  useEffect(() => {
    if (open) {
      turnOn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Portal open={open || isVisible} lockable>
      <Sheet
        {...props}
        open={open}
        height={height}
        closable={closable}
        onClosed={turnOff}
      />
    </Portal>
  );
};

export default BottomSheet;
