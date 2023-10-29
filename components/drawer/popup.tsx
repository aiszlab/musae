import React, { useEffect } from "react";
import { StyledMask, StyledPanel, StyledWrapper } from "./styled";
import { useAnimate } from "framer-motion";
import type { PopupProps } from "./types";
import { useClassNames, usePlacements } from "./hooks";
import { withDot } from "../../utils/class-name";

const Popup = ({ isOpened, onClose, placement = "right", ...props }: PopupProps) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames();
  const [placements] = usePlacements([placement]);

  useEffect(() => {
    if (!scope.current) return;

    (async () => {
      if (isOpened) {
        await animate(scope.current, { display: "block" }, { duration: 0 });
        animate(withDot(classNames.panel), { transform: placements.at(1) });
        animate(withDot(classNames.mask), { opacity: 1 });
      } else {
        await Promise.all([
          animate(withDot(classNames.panel), { transform: placements.at(0) }),
          animate(withDot(classNames.mask), { opacity: 0 }),
        ]);
        animate(scope.current, { display: "none" }, { duration: 0 });
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened, ...placements]);

  return (
    <StyledWrapper ref={scope} className={classNames.drawer}>
      {/* mask */}
      <StyledMask className={classNames.mask} onClick={onClose} />

      {/* panel */}
      <StyledPanel className={classNames.panel} placement={placement}>
        <div className={classNames.header}></div>
        <div className={classNames.body}>{props.children}</div>
      </StyledPanel>
    </StyledWrapper>
  );
};

export default Popup;
