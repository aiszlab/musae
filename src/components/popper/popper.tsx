import React from "react";
import type { PopperProps } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = ({ destroyable, ...props }: PopperProps) => {
  return (
    <Portal open={props.open} lockable={false} destroyable={destroyable}>
      <Dropdown {...props} />
    </Portal>
  );
};

export default Popper;
