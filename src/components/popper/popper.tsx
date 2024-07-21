import React, { forwardRef } from "react";
import type { PopperProps } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = forwardRef<HTMLDivElement, PopperProps>(({ destroyable, placement = "bottom-start", ...props }, ref) => {
  return (
    <Portal open={props.open} destroyable={destroyable}>
      <Dropdown {...props} placement={placement} ref={ref} />
    </Portal>
  );
});

export default Popper;
