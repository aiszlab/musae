import React, { useEffect, useMemo, useRef } from "react";
import type { DropdownProps } from "./types";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { toClassList } from "../../utils/styles";
import { isFunction } from "@aiszlab/relax";
import { computePosition, flip, size, autoUpdate, offset } from "@floating-ui/dom";
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

const Dropdown = ({
  open,
  children,
  placement = "bottom-start",
  style,
  className,
  onExit,
  onExited,
  onEntered,
  trigger: _trigger,
  ...props
}: DropdownProps) => {
  const floatable = useRef<HTMLDivElement>(null);
  const classNames = useClassNames(ComponentToken.Popper);

  /// how to get trigger
  const trigger = useMemo<Nullable<Element>>(() => {
    if (!open) return null;
    if (isFunction(_trigger)) return _trigger();
    return _trigger ?? null;
  }, [open, _trigger]);

  /// auto update: calc trigger dom to get position
  /// if trigger changed, re-relate
  useEffect(() => {
    const _floatable = floatable.current;
    const isCentered = placement === "center";

    if (!trigger) return;
    if (!_floatable) return;

    const cleanup = autoUpdate(trigger, _floatable, () => {
      computePosition(trigger, _floatable, {
        placement: isCentered ? "bottom" : placement,
        middleware: [
          !isCentered && flip(),
          isCentered &&
            offset(({ rects }) => {
              return -rects.reference.height / 2 - rects.floating.height / 2;
            }),
          isCentered &&
            size({
              apply: ({ rects, elements }) => {
                elements.floating.style.width = `${rects.reference.width}px`;
                elements.floating.style.height = `${rects.reference.height}px`;
              },
            }),
        ],
      })
        .then(({ x, y }) => {
          _floatable.style.transform = `translate(${x}px, ${y}px)`;
        })
        .catch(() => null);
    });

    return () => {
      // reset rect styles
      _floatable.style.width = "";
      _floatable.style.height = "";
      // cleanup listener
      cleanup();
    };
  }, [placement, trigger]);

  const styled = {
    dropdown: stylex.props(styles.dropdown),
    hidden: stylex.props(styles.hidden),
  };

  useEffect(() => {
    (async () => {
      if (open) {
        floatable.current?.classList.remove(...toClassList(styled.hidden.className));
        await onEntered?.().catch(() => null);
        return;
      }

      await onExit?.().catch(() => null);
      floatable.current?.classList.add(...toClassList(styled.hidden.className));
      await onExited?.().catch(() => null);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div
      ref={floatable}
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
};

export default Dropdown;
