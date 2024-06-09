import React, { CSSProperties, useEffect, useMemo, useRef } from "react";
import type { DropdownProps } from "./types";
import { ComponentToken, PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import * as stylex from "@stylexjs/stylex";
import clsx from "clsx";
import { isFunction, isVoid } from "@aiszlab/relax";
import { computePosition, flip, autoUpdate, offset, arrow } from "@floating-ui/dom";
import { Nullable } from "@aiszlab/relax/types";
import { useOffsets } from "./hooks";
import { elevations, positions, sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useAnimate } from "framer-motion";

const styles = {
  dropdown: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      zIndex: positions.popper,
      position: "absolute",
      backgroundColor: props.backgroundColor,
      insetBlockStart: 0,
      insetInlineStart: 0,
      boxShadow: elevations.small,
      borderRadius: sizes.xxxxsmall,

      // animation
      willChange: "transform, opacity",
      transformOrigin: "50% 50%",
    }),

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
  const [floatable, animate] = useAnimate<HTMLDivElement>();
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
    if (!trigger) return;

    const cleanup = autoUpdate(trigger, floatable.current, () => {
      computePosition(trigger, floatable.current, {
        placement: placement,
        middleware: [
          flip(),
          offset(offsets),
          arrowable && !!arrowRef.current && arrow({ element: arrowRef.current, padding: 30 }),
        ],
      })
        .then(({ x, y, middlewareData }) => {
          // set float element styles
          floatable.current.style.translate = `${x}px ${y}px`;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placement, trigger, offsets, arrowable]);

  const styled = {
    dropdown: stylex.props(
      styles.dropdown.default({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] }),
      overlay && styles.dropdown.overlay
    ),
    arrow: stylex.props(styles.arrow.default({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] })),
  };

  useEffect(() => {
    (async () => {
      if (open) {
        floatable.current.style.display = "";
        floatable.current.style.opacity = "0";
        floatable.current.style.opacity = "scale(0, 0)";
        await animate(floatable.current, { opacity: 1, transform: "scale(1, 1)" }, { delay: 0.1, duration: 0.2 });
        await onEntered?.();
        return;
      }

      await Promise.all([
        onExit?.(),
        animate(floatable.current, { opacity: 0, transform: "scale(0, 0)" }, { delay: 0.1, duration: 0.2 }).then(() => {
          floatable.current.style.display = "none";
          floatable.current.style.opacity = "";
          floatable.current.style.transform = "";
        }),
      ]);
      onExited?.();
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
