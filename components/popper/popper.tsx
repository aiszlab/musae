import React from "react";
import { type PopperProps } from "./types";
import { Portal } from "../portal";
import Popup from "./popup";

const Popper = (props: PopperProps) => {
  return (
    <Portal isVisible={props.isVisible} lockable={false}>
      <Popup {...props} />
    </Portal>
  );
};

export default Popper;
