import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import type { DrawerProps } from "./types";
import { StyledMask, StyledPanel, StyledWrapper } from "./styled";
import { useAnimate } from "framer-motion";

const Drawer = ({ isOpened, onClose, ...props }: DrawerProps) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    console.log("scope.current====", scope.current);

    if (!scope.current) {
      return;
    }
    if (isOpened) {
      animate(scope.current, { transform: "translateX(0%)" }, { duration: 0.3 });
    } else {
      animate(scope.current, { right: -400 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  if (!isOpened) return null;

  return createPortal(
    <StyledWrapper>
      <StyledMask onClick={onClose} />

      {/* popup */}
      <StyledPanel ref={scope}>{props.children}</StyledPanel>
    </StyledWrapper>,
    document.body
  );
};

export default Drawer;
