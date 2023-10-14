import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { type PopperProps } from "./types";
import { createPopper } from "@popperjs/core";
import { Wrapper } from "./styled";

const Popper = ({ children, isVisible, trigger, className }: PopperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    if (!trigger) return;
    if (!ref.current) return;

    const popper = createPopper(trigger, ref.current, {
      placement: "bottom-start",
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
    <Wrapper ref={ref} isVisible={isVisible} className={className}>
      {children}
    </Wrapper>,
    document.body
  );
};

export default Popper;
