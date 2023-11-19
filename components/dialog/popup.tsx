import React, { useContext, useEffect } from "react";
import type { PopupProps } from "./types";
import { StyledPopup } from "./styled";
import { useFooter } from "./hooks";
import { useAnimate } from "framer-motion";
import { ComponentToken, DialogClassToken, withDot } from "../../utils/class-name";
import { Context } from "../config";

const Popup = ({ onCancel, isOpened, ...props }: PopupProps) => {
  const classNames = useContext(Context).classNames[ComponentToken.Dialog];
  const footer = useFooter([props.footer, props.onConfirm, onCancel]);
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    (async () => {
      if (isOpened) {
        await animate(scope.current, { display: "flex" }, { duration: 0 });
        animate(withDot(classNames[DialogClassToken.Panel]), { opacity: 1 });
        animate(withDot(classNames[DialogClassToken.Mask]), { opacity: 0.8 });
      } else {
        await Promise.all([
          animate(withDot(classNames[DialogClassToken.Panel]), { opacity: 0 }),
          animate(withDot(classNames[DialogClassToken.Mask]), { opacity: 0 }),
        ]);
        animate(scope.current, { display: "none" }, { duration: 0 });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return (
    <StyledPopup ref={scope}>
      {/* mask */}
      <div className={classNames[DialogClassToken.Mask]} onClick={onCancel} />

      {/* panel */}
      <div className={classNames[DialogClassToken.Panel]}>
        <div className={classNames[DialogClassToken.Header]}></div>
        <div className={classNames[DialogClassToken.Body]}>{props.children}</div>
        <div className={classNames[DialogClassToken.Footer]}>{footer}</div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
