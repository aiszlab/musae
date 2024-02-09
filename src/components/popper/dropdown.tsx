import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef } from "react";
import type { PopperRef, PopperProps } from "./types";
import { Instance, createPopper } from "@popperjs/core";
import { useAnimate } from "framer-motion";
import { useStyles } from "./hooks";
import Context from "../config/context";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useMounted } from "@aiszlab/relax";

const Dropdown = forwardRef<PopperRef, PopperProps>(({ open, trigger, children, onMouseDown }, ref) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const styles = useStyles();
  const classNames = useContext(Context).classNames[ComponentToken.Popper];

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

  useMounted(() => {
    if (!trigger) return;

    popper.current = createPopper(trigger, scope.current, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "flip",
        },
      ],
    });

    return () => {
      popper.current?.destroy();
    };
  });

  useEffect(() => {
    (async () => {
      if (open) {
        popper.current?.update();
        scope.current.attributeStyleMap.delete("display");
        await animate(scope.current, { opacity: 1 }, { duration: 0.1 });
      } else {
        await animate(scope.current, { opacity: 0 }, { duration: 0.1 });
        scope.current.attributeStyleMap.set("display", "none");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div
      ref={scope}
      className={classNames[PopperClassToken.Dropdown]}
      onMouseDown={onMouseDown}
      style={styles[PopperClassToken.Dropdown]}
    >
      {children}
    </div>
  );
});

export default Dropdown;
