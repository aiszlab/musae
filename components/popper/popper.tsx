import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { PopperRef, type PopperProps } from "./types";
import { Portal } from "../portal";
import Popup from "./dropdown";

const Popper = forwardRef<PopperRef, PopperProps>((props, ref) => {
  const popper = useRef<PopperRef>(null);

  useImperativeHandle(
    ref,
    () => ({
      update: () => {
        popper.current?.update?.();
      },
    }),
    []
  );

  return (
    <Portal isVisible={props.isVisible} lockable={false}>
      <Popup {...props} ref={popper} />
    </Portal>
  );
});

export default Popper;
