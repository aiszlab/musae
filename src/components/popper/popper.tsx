import React from "react";
import type { PopperProps } from "./types";
import { Portal } from "../portal";
import Dropdown from "./dropdown";

const Popper = ({ portal = true, ...props }: PopperProps) => {
  /// !!! not need use portal, just render dropdown
  if (!portal) {
    return <Dropdown {...props} />;
  }

  return (
    <Portal open={props.open} lockable={false}>
      <Dropdown {...props} />
    </Portal>
  );
};

export default Popper;
