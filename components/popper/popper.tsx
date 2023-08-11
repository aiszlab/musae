import React, { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Props } from "./types";
import { createPopper } from "@popperjs/core";
import Wrapper from "./wrapper";

const Popper: FC<Props> = ({ children, isVisible, trigger }) => {
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
