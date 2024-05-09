import React from "react";
import type { PopperProps } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = (props: PopperProps) => {
  return (
    <Portal open={props.open} lockable={false}>
      <Dropdown {...props} />
    </Portal>
  );
};

export default Popper;
