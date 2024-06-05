import React, { useEffect, useMemo, useRef } from "react";
import type { DropdownProps } from "./types";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { toClassList } from "../../utils/styles";
import { isFunction } from "@aiszlab/relax";
import { computePosition, flip, autoUpdate, offset, arrow } from "@floating-ui/dom";
import { Nullable } from "@aiszlab/relax/types";
import { useOffsets } from "./hooks";
import { positions } from "../theme/tokens.stylex";

const styles = stylex.create({
  dropdown: {
    zIndex: positions.popper,
    position: "absolute",
    insetBlockStart: 0,
    insetInlineStart: 0,
    willChange: "transform",
  },

  hidden: {
    display: "none",
  },

  overlay: {
    zIndex: positions.overlay,
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
  offset: _offset,
  overlay = false,
  arrow: arrowable = false,
  ...props
}: DropdownProps) => {
  const floatable = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const classNames = useClassNames(ComponentToken.Popper);

  /// how to get trigger
  const trigger = useMemo<Nullable<Element>>(() => {
    if (!open) return null;
    if (isFunction(_trigger)) return _trigger();
    return _trigger ?? null;
  }, [open, _trigger]);

  /// memorized offsets
  const offsets = useOffsets({ offset: _offset });

  /// auto update: calc trigger dom to get position
  /// if trigger changed, re-relate
  useEffect(() => {
    const _floatable = floatable.current;

    if (!trigger) return;
    if (!_floatable) return;

    const cleanup = autoUpdate(trigger, _floatable, () => {
      computePosition(trigger, _floatable, {
        placement: placement,
        middleware: [flip(), offset(offsets), arrow({ element: arrowRef.current! })],
      })
        .then(({ x, y }) => {
          _floatable.style.transform = `translate(${x}px, ${y}px)`;
        })
        .catch(() => null);
    });

    return () => {
      cleanup();
    };
  }, [placement, trigger, offsets]);

  const styled = {
    dropdown: stylex.props(styles.dropdown, overlay && styles.overlay),
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

      <div ref={arrowRef} />
    </div>
  );
};

export default Dropdown;
