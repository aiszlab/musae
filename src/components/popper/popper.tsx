import React from "react";
import type { PopperProps } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = ({ destroyable, placement = "bottom-start", ...props }: PopperProps) => {
  return (
    <Portal open={props.open} destroyable={destroyable}>
      <Dropdown {...props} placement={placement} />
    </Portal>
  );
};

export default Popper;
