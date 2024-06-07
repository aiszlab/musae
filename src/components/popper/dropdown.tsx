import React, { CSSProperties, useEffect, useMemo, useRef } from "react";
import type { DropdownProps } from "./types";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { toClassList } from "../../utils/styles";
import { isFunction, isVoid } from "@aiszlab/relax";
import { computePosition, flip, autoUpdate, offset, arrow } from "@floating-ui/dom";
import { Nullable } from "@aiszlab/relax/types";
import { useOffsets } from "./hooks";
import { positions, sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = {
  dropdown: stylex.create({
    default: {
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
  }),

  arrow: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      position: "absolute",
      width: sizes.xxxsmall,
      height: sizes.xxxsmall,
      backgroundColor: props.backgroundColor,
      insetBlockStart: `calc(${sizes.xxxsmall} * -1)`,
      transform: "rotate(45deg)",
    }),
  }),
};

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
  const theme = useTheme();

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
        middleware: [
          flip(),
          offset(offsets),
          arrowable && !!arrowRef.current && arrow({ element: arrowRef.current, padding: 30 }),
        ],
      })
        .then(({ x, y, middlewareData }) => {
          // set float element styles
          _floatable.style.transform = `translate(${x}px, ${y}px)`;

          // set arrwo styles
          if (middlewareData.arrow && !!arrowRef.current) {
            arrowRef.current.style.insetInlineStart = isVoid(middlewareData.arrow.x)
              ? ""
              : `${middlewareData.arrow.x}px`;
            arrowRef.current.style.insetBlockStart = isVoid(middlewareData.arrow.y)
              ? ""
              : `${middlewareData.arrow.y}px`;
          }
        })
        .catch(() => null);
    });

    return () => {
      cleanup();
    };
  }, [placement, trigger, offsets, arrowable]);

  const styled = {
    dropdown: stylex.props(styles.dropdown.default, overlay && styles.dropdown.overlay),
    hidden: stylex.props(styles.dropdown.hidden),
    arrow: stylex.props(styles.arrow.default({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] })),
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

      {arrowable && <div ref={arrowRef} className={styled.arrow.className} style={styled.arrow.style} />}
    </div>
  );
};

export default Dropdown;
