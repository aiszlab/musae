import React, { forwardRef } from "react";
import type { PopperProps, PopperRef } from "../../types/popper";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = forwardRef<PopperRef, PopperProps>(
  ({ destroyable, placement = "bottom-start", container, ...props }, ref) => {
    return (
      <Portal open={props.open} destroyable={destroyable} container={container}>
        <Dropdown {...props} placement={placement} ref={ref} />
      </Portal>
    );
  },
);

export default Popper;
