import React from "react";
import type { DrawerProps } from "./types";
import { Portal } from "../portal";
import Popup from "./popup";

const Drawer = ({ isOpened, ...props }: DrawerProps) => {
  return (
    <Portal isVisible={isOpened}>
      <Popup isOpened={isOpened} {...props} />
    </Portal>
  );
};

export default Drawer;
