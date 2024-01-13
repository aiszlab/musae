import React, { useEffect } from "react";
import { StyledPopup } from "./styled";
import { useAnimate } from "framer-motion";
import type { PopupProps } from "./types";
import { usePlacements } from "./hooks";
import { ComponentToken, DrawerClassToken, withDot } from "../../utils/class-name";
import { useClassNames } from "../config";

const Popup = ({ isOpened, onClose, placement = "right", ...props }: PopupProps) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames(ComponentToken.Drawer);
  const [placements] = usePlacements([placement]);

  useEffect(() => {
    (async () => {
      if (isOpened) {
        await animate(scope.current, { display: "block" }, { duration: 0 });
        animate(withDot(classNames[DrawerClassToken.Panel]), { transform: placements.at(1) });
        animate(withDot(classNames[DrawerClassToken.Mask]), { opacity: 0.8 });
      } else {
        await Promise.all([
          animate(withDot(classNames[DrawerClassToken.Panel]), { transform: placements.at(0) }),
          animate(withDot(classNames[DrawerClassToken.Mask]), { opacity: 0 }),
        ]);
        animate(scope.current, { display: "none" }, { duration: 0 });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened, ...placements]);

  return (
    <StyledPopup ref={scope} className={classNames[DrawerClassToken.Drawer]} placement={placement}>
      {/* mask */}
      <div className={classNames[DrawerClassToken.Mask]} onClick={onClose} />

      {/* panel */}
      <div className={classNames[DrawerClassToken.Panel]}>
        <div className={classNames[DrawerClassToken.Header]}></div>
        <div className={classNames[DrawerClassToken.Body]}>{props.children}</div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
