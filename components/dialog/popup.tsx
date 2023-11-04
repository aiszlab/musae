import React, { useEffect } from "react";
import type { PopupProps } from "./types";
import { StyledPopup } from "./styled";
import { useClassNames, useFooter } from "./hooks";
import { useAnimate } from "framer-motion";
import { withDot } from "../../utils/class-name";

const Popup = ({ onCancel, isOpened, ...props }: PopupProps) => {
  const classNames = useClassNames();
  const footer = useFooter([props.footer, props.onConfirm, onCancel]);
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    if (!scope.current) return;

    (async () => {
      if (isOpened) {
        await animate(scope.current, { display: "flex" }, { duration: 0 });
        animate(withDot(classNames.panel), { opacity: 1 });
        animate(withDot(classNames.mask), { opacity: 0.8 });
      } else {
        await Promise.all([
          animate(withDot(classNames.panel), { opacity: 0 }),
          animate(withDot(classNames.mask), { opacity: 0 }),
        ]);
        animate(scope.current, { display: "none" }, { duration: 0 });
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return (
    <StyledPopup ref={scope}>
      {/* mask */}
      <div className={classNames.mask} onClick={onCancel} />

      {/* panel */}
      <div className={classNames.panel}>
        <div className={classNames.header}></div>
        <div className={classNames.body}>{props.children}</div>
        <div className={classNames.footer}>{footer}</div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
