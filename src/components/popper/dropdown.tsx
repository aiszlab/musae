import React, { type CSSProperties, forwardRef, useImperativeHandle } from "react";
import type { DropdownProps, PopperRef } from "./types";
import { PopperClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import stylex from "@stylexjs/stylex";
import { useRefs, clsx } from "@aiszlab/relax";
import { useAnimation, useFloating } from "./hooks";
import { elevations, positions, sizes } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { ComponentToken } from "../../utils/component-token";
import { contains } from "@aiszlab/relax/dom";

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
      overflow: "auto",

      // animation
      willChange: "translate",
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
      offset: _offset,
      overlay = false,
      arrow: arrowable = false,
      disappearable = true,
      ...props
    },
    ref,
  ) => {
    const classNames = useClassNames(ComponentToken.Popper);
    const theme = useTheme();
    const { floatableRef, arrowRef } = useFloating({
      arrowable,
      offset: _offset,
      placement,
      open,
      trigger,
    });
    const { disappear, animatableRef } = useAnimation({
      open,
      disappearable,
      onEntered,
      onExit,
      onExited,
    });
    const refs = useRefs(floatableRef, animatableRef);

    useImperativeHandle(ref, () => {
      return {
        disappear,
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
        ref={refs}
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
