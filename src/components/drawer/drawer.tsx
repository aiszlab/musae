import React from "react";
import type { DrawerProps } from "./types";
import { Portal } from "../portal";
import Popup from "./popup";

const Drawer = ({ open, ...props }: DrawerProps) => {
  return (
    <Portal open={open}>
      <Popup open={open} {...props} />
    </Portal>
  );
};

export default Drawer;
