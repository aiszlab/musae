import React, { forwardRef } from "react";
import type { PopperProps, PopperRef } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = forwardRef<PopperRef, PopperProps>(
  ({ destroyable, placement = "bottom-start", ...props }, ref) => {
    return (
      <Portal open={props.open} destroyable={destroyable}>
        <Dropdown {...props} placement={placement} ref={ref} />
      </Portal>
    );
  },
);

export default Popper;
