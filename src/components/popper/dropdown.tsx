import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import type { PopperRef, DropdownProps } from "./types";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { toClassList } from "../../utils/styles";
import { isFunction } from "@aiszlab/relax";
import { computePosition, flip, size } from "@floating-ui/dom";
import { Nullable } from "@aiszlab/relax/types";

const styles = stylex.create({
  dropdown: {
    zIndex: 1050,
    position: "absolute",
    insetBlockStart: 0,
    insetInlineStart: 0,
    willChange: "transform",
  },

  hidden: {
    display: "none",
  },
});

const Dropdown = forwardRef<PopperRef, DropdownProps>(
  (
    {
      open,
      offset = 0,
      children,
      placement = "bottom-start",
      style,
      className,
      onExit,
      onExited,
      onEntered,
      trigger: _trigger,
      ...props
    },
    ref
  ) => {
    const container = useRef<HTMLDivElement>(null);
    const classNames = useClassNames(ComponentToken.Popper);

    useImperativeHandle(ref, () => ({
      update: () => {},
    }));

    /// how to get trigger
    const trigger = useMemo<Nullable<Element>>(() => {
      if (!open) return null;
      if (isFunction(_trigger)) return _trigger();
      return _trigger ?? null;
    }, [open, _trigger]);

    /// auto update: calc trigger dom to get position
    /// if trigger changed, re-relate
    useEffect(() => {
      if (!trigger) return;
      if (!container.current) return;

      computePosition(trigger, container.current, {
        middleware: [
          flip(),
          size({
            apply: ({ rects, elements }) => {
              elements.floating.attributeStyleMap.set("width", `${rects.reference.width}px`);
              elements.floating.attributeStyleMap.set("height", `${rects.reference.height}px`);
            },
          }),
        ],
      })
        .then(({ x, y }) => {
          container.current?.attributeStyleMap.set("transform", `translate(${x}px, ${y}px)`);
        })
        .catch(() => null);
    }, [trigger]);

    const styled = {
      dropdown: stylex.props(styles.dropdown),
      hidden: stylex.props(styles.hidden),
    };

    useEffect(() => {
      (async () => {
        if (open) {
          container.current?.classList.remove(...toClassList(styled.hidden.className));
          await onEntered?.().catch(() => null);
          return;
        }

        await onExit?.().catch(() => null);
        container.current?.classList.add(...toClassList(styled.hidden.className));
        await onExited?.().catch(() => null);
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
