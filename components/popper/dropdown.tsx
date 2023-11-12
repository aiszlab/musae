import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { PopperRef, PopperProps } from "./types";
import { Instance, createPopper } from "@popperjs/core";
import { useAnimate } from "framer-motion";
import { useClassNames, useStyles } from "./hooks";

const Dropdown = forwardRef<PopperRef, PopperProps>(({ isVisible, trigger, children, onMouseDown, ...props }, ref) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames([props.className]);
  const styles = useStyles();

  const popper = useRef<Instance | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      update: () => {
        popper.current?.update();
      },
    }),
    []
  );

  useEffect(() => {
    if (!trigger) return;

    popper.current = createPopper(trigger, scope.current, {
      placement: "bottom-start",
    });

    return () => {
      popper.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (isVisible) {
        await animate(scope.current, { display: "unset" }, { duration: 0 });
        await animate(scope.current, { opacity: 1 }, { duration: 0.1 });
      } else {
        await animate(scope.current, { opacity: 0 }, { duration: 0.1 });
        await animate(scope.current, { display: "none" });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div ref={scope} className={classNames.dropdown} onMouseDown={onMouseDown} style={styles.dropdown}>
      {children}
    </div>
  );
});

export default Dropdown;
