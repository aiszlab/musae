import React, { forwardRef, useImperativeHandle, useRef } from "react";
import type { PopperRef, PopperProps } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = forwardRef<PopperRef, PopperProps>(({ portal = true, ...props }, ref) => {
  const popper = useRef<PopperRef>(null);

  useImperativeHandle(ref, () => ({
    update: () => {
      popper.current?.update?.();
    },
  }));

  /// !!! not need use portal, just render dropdown
  if (!portal) {
    return <Dropdown {...props} ref={popper} />;
  }

  return (
    <Portal open={props.open} lockable={false}>
      <Dropdown {...props} ref={popper} />
    </Portal>
  );
});

export default Popper;
