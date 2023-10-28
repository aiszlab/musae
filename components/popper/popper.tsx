import React, { useEffect, useRef } from "react";
import { type PopperProps } from "./types";
import { createPopper } from "@popperjs/core";
import { Wrapper } from "./styled";
import { Portal } from "../portal";

const Popper = ({ children, isVisible, trigger, className, onMouseDown }: PopperProps) => {
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

  return (
    <Portal isVisible={isVisible}>
      <Wrapper ref={ref} isVisible={isVisible} className={className} onMouseDown={onMouseDown}>
        {children}
      </Wrapper>
    </Portal>
  );
};

export default Popper;
