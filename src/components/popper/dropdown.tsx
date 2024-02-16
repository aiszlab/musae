import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { PopperRef, PopperProps } from "./types";
import { Instance, createPopper } from "@popperjs/core";
import { useAnimate } from "framer-motion";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useMounted } from "@aiszlab/relax";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";

const styles = stylex.create({
  dropdown: {
    display: "none",
    opacity: 0,
  },
});

const Dropdown = forwardRef<PopperRef, PopperProps>(({ open, trigger, children, onMouseDown }, ref) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const classNames = useClassNames(ComponentToken.Popper);

  const popper = useRef<Instance | null>(null);

  useImperativeHandle(ref, () => ({
    update: () => {
      popper.current?.update();
    },
  }));

  useMounted(() => {
    if (!trigger) return;

    const popped = createPopper(trigger, scope.current, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "flip",
        },
      ],
    });
    popper.current = popped;

    return () => {
      popped.destroy();
    };
  });

  useEffect(() => {
    (async () => {
      if (open) {
        popper.current?.update();
        scope.current.attributeStyleMap.set("display", "block");
        animate(scope.current, { opacity: 1 }, { duration: 0.1 });
        return;
      }

      await animate(scope.current, { opacity: 0 }, { duration: 0.1 });
      scope.current.attributeStyleMap.set("display", "none");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const styled = stylex.props(styles.dropdown);

  return (
    <div
      ref={scope}
      onMouseDown={onMouseDown}
      className={clsx(classNames[PopperClassToken.Dropdown], styled.className)}
      style={styled.style}
    >
      {children}
    </div>
  );
});

export default Dropdown;
