import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import type { PopperRef, DropdownProps } from "./types";
import { Instance, createPopper } from "@popperjs/core";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { toClassList } from "../../utils/styles";
import { isArray } from "@aiszlab/relax";

const styles = stylex.create({
  dropdown: {
    zIndex: 1050,
  },

  hidden: {
    display: "none",
  },
});

const Dropdown = forwardRef<PopperRef, DropdownProps>(
  (
    {
      open,
      trigger,
      offset = 0,
      children,
      placement = "bottom-start",
      style,
      className,
      onExit,
      onExited,
      onEntered,
      ...props
    },
    ref
  ) => {
    const container = useRef<HTMLDivElement>(null);
    const classNames = useClassNames(ComponentToken.Popper);
    const popper = useRef<Instance | null>(null);

    useImperativeHandle(ref, () => ({
      update: () => {
        popper.current?.update();
      },
    }));

    /// fix: why use mount instead of mounted?
    /// when mounted, this div display a normal block, must sync to popper.
    useEffect(() => {
      if (!trigger) return;
      if (!container.current) return;

      const _popper = createPopper(trigger, container.current, {
        placement,
        modifiers: [
          {
            name: "flip",
          },
          {
            name: "offset",
            options: {
              offset: isArray(offset) ? offset : [offset, offset],
            },
          },
        ],
      });
      popper.current = _popper;

      return () => {
        _popper.destroy();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);

    const styled = {
      dropdown: stylex.props(styles.dropdown),
      hidden: stylex.props(styles.hidden),
    };

    useEffect(() => {
      (async () => {
        if (open) {
          container.current?.classList.remove(...toClassList(styled.hidden.className));
          await onEntered?.();
          return;
        }

        await onExit?.();
        container.current?.classList.add(...toClassList(styled.hidden.className));
        await onExited?.();
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
      <div
        ref={container}
        {...props}
        className={clsx(classNames[PopperClassToken.Dropdown], className, styled.dropdown.className)}
        style={{
          ...styled.dropdown.style,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

export default Dropdown;
