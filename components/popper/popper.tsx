import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { type PopperProps } from "./types";
import { createPopper } from "@popperjs/core";
import { Wrapper } from "./styled";

const Popper = ({ children, isVisible, trigger }: PopperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return void 0;
    if (!trigger) return void 0;
    if (!ref.current) return void 0;

    const popper = createPopper(trigger, ref.current, {
      placement: "bottom",
    });

    return () => {
      popper.destroy();
    };
  }, [isVisible, trigger]);

  /// destory after hide
  if (!isVisible) {
    return null;
  }

  return createPortal(
    <Wrapper ref={ref} isVisible={isVisible}>
      {children}
    </Wrapper>,
    document.body
  );
};

export default Popper;
