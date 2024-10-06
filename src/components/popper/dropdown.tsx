import React, { type CSSProperties, forwardRef, useImperativeHandle } from "react";
import type { DropdownProps, PopperRef } from "musae/types/popper";
import { PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import stylex from "@stylexjs/stylex";
import { clsx } from "@aiszlab/relax";
import { useFloating } from "./hooks";
import { elevations, positions, sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { ComponentToken } from "../../utils/component-token";
import { contains } from "@aiszlab/relax/dom";

const styles = {
  dropdown: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      zIndex: positions.popper,
      position: "fixed",
      backgroundColor: props.backgroundColor,
      insetBlockStart: 0,
      insetInlineStart: 0,
      boxShadow: elevations.small,
      borderRadius: sizes.xxxxsmall,

      // animation
      willChange: "inset-inline-start, inset-block-start, opacity",
      transitionProperty: "inset-inline-start, inset-block-start, opacity",
      transitionDuration: "0.1s",

      // default hidden
      display: "none",
      opacity: 0,
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
      transform: "rotate(45deg)",
      zIndex: positions.background,
    }),
  }),
};

const Dropdown = forwardRef<PopperRef, DropdownProps>(
  (
    {
      open,
      children,
      placement,
      style,
      className,
      onExit,
      onExited,
      onEntered,
      trigger,
      offset,
      overlay = false,
      arrow: arrowable = false,
      disappearable = true,
      ...props
    },
    ref,
  ) => {
    const classNames = useClassNames(ComponentToken.Popper);
    const theme = useTheme();

    const { floatableRef, arrowRef, disappear } = useFloating({
      arrowable,
      offset,
      placement,
      open,
      trigger,
      onEntered,
      onExit,
      onExited,
      disappearable,
    });

    useImperativeHandle(ref, () => {
      return {
        disappear: () => disappear(true),
        contains: (node) => {
          return contains(floatableRef.current, node);
        },
      };
    });

    const styled = {
      dropdown: stylex.props(
        styles.dropdown.default({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] }),
        overlay && styles.dropdown.overlay,
      ),
      arrow: stylex.props(
        styles.arrow.default({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] }),
      ),
    };

    return (
      <div
        ref={floatableRef}
        {...props}
        className={clsx(
          classNames[PopperClassToken.Dropdown],
          className,
          styled.dropdown.className,
        )}
        style={{
          ...styled.dropdown.style,
          ...style,
        }}
      >
        {children}

        {arrowable && (
          <div ref={arrowRef} className={styled.arrow.className} style={styled.arrow.style} />
        )}
      </div>
    );
  },
);

export default Dropdown;
