import React, { useEffect, useRef } from "react";
import type { PopupProps } from "./types";
import { createPopper } from "@popperjs/core";
import { StyledPopup } from "./styled";

const Popup = ({ isVisible, trigger, children, className, onMouseDown }: PopupProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger) return;

    const popper = createPopper(trigger, ref.current!, {
      placement: "bottom-start",
    });

    return () => {
      popper.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPopup ref={ref} isVisible={isVisible} className={className} onMouseDown={onMouseDown}>
      {children}
    </StyledPopup>
  );
};

export default Popup;
