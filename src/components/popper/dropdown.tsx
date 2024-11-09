import React, { type CSSProperties, forwardRef, useImperativeHandle } from "react";
import type { DropdownProps, PopperRef } from "musae/types/popper";
import { useClassNames } from "../../hooks/use-class-names.component";
import stylex from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useFloating } from "./hooks";
import { elevations, positions, sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { contains } from "@aiszlab/relax/dom";
import { CLASS_NAMES } from "./context";

const styles = {
  portal: stylex.create({
    default: {
      position: "fixed",
      overflow: "hidden",
      pointerEvents: "none",
      inset: 0,
      zIndex: positions.popper,
    },

    overlay: {
      zIndex: positions.overlay,
    },
  }),

  dropdown: stylex.create({
    default: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
      position: "absolute",
      backgroundColor: props.backgroundColor,
      insetBlockStart: 0,
      insetInlineStart: 0,
      boxShadow: elevations.small,
      borderRadius: sizes.xxxxxsmall,
      pointerEvents: "auto",

      // animation
      willChange: "translate, opacity",
      transitionProperty: "translate, opacity",
      transitionDuration: "0.1s",

      // default hidden
      display: "none",
      opacity: 0,
    }),
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
    const classNames = useClassNames(CLASS_NAMES);
    const theme = useTheme();

    const { floatableRef, arrowRef, disappear, composedRef } = useFloating({
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
        styles.dropdown.default({ backgroundColor: theme.colors["surface-container"] }),
      ),
      arrow: stylex.props(
        styles.arrow.default({ backgroundColor: theme.colors["surface-container"] }),
      ),
      portal: stylex.props(styles.portal.default, overlay && styles.portal.overlay),
    };

    return (
      <div className={styled.portal.className} style={styled.portal.style}>
        <div
          ref={composedRef}
          {...props}
          className={stringify(classNames.dropdown, className, styled.dropdown.className)}
          style={{
            ...styled.dropdown.style,
            ...style,
          }}
        >
          {children}

          {arrowable && (
            <div
              ref={arrowRef}
              className={stringify(classNames.arrow, styled.arrow.className)}
              style={styled.arrow.style}
            />
          )}
        </div>
      </div>
    );
  },
);

export default Dropdown;
