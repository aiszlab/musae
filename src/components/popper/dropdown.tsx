import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { PopperRef, DropdownProps } from "./types";
import { Instance, createPopper } from "@popperjs/core";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useMounted } from "@aiszlab/relax";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";

const styles = stylex.create({
  dropdown: {
    zIndex: 1050,
  },

  hidden: {
    display: "none",
  },
});

const Dropdown = forwardRef<PopperRef, DropdownProps>(
  ({ open, trigger, children, placement = "bottom-start", className, style, onExit, onEntered, ...props }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const classNames = useClassNames(ComponentToken.Popper);
    const popper = useRef<Instance | null>(null);

    useImperativeHandle(ref, () => ({
      update: () => {
        popper.current?.update();
      },
    }));

    useMounted(() => {
      if (!trigger) return;
      if (!container.current) return;

      const popped = createPopper(trigger, container.current, {
        placement,
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

    const styled = {
      dropdown: stylex.props(styles.dropdown),
      hidden: stylex.props(styles.hidden),
    };

    useEffect(() => {
      (async () => {
        const toggleBy = styled.hidden.className?.split(" ") ?? [];

        if (open) {
          container.current?.classList.remove(...toggleBy);
          await onEntered?.();
          return;
        }

        await onExit?.();
        container.current?.classList.add(...toggleBy);
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
      <div
        ref={container}
        className={clsx(classNames[PopperClassToken.Dropdown], className, styled.dropdown)}
        {...props}
        style={{
          ...styled.dropdown.style,
          ...styled.hidden.style,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

export default Dropdown;
