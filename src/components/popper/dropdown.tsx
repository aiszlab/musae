import styles from "./styles";
import React, { forwardRef, useImperativeHandle } from "react";
import type { DropdownProps, PopperRef } from "../../types/popper";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { useFloating } from "./hooks";
import { useTheme } from "../theme";
import { contains } from "@aiszlab/relax/dom";
import { CLASS_NAMES } from "./context";
import { props as $props } from "@stylexjs/stylex";

const Dropdown = forwardRef<PopperRef, DropdownProps>(
  (
    {
      open,
      children,
      placement,
      style,
      className,
      onEnter,
      onExit,
      onExited,
      onEntered,
      trigger,
      offset,
      overlay = false,
      arrow: arrowable = false,
      disappearable = true,
      elevation = true,
      portalClassName,
      portalStyle,
      ...props
    },
    ref,
  ) => {
    const classNames = useClassNames(CLASS_NAMES);
    const theme = useTheme();

    const { floatableRef, arrowRef, disappear } = useFloating({
      arrowable,
      offset,
      placement,
      open,
      trigger,
      onEnter,
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
      dropdown: $props(styles.dropdown.base, elevation && styles.dropdown.elevation),
      arrow: $props(styles.arrow.base),
      portal: $props(styles.portal.base, overlay && styles.portal.overlay),
    };

    return (
      <div
        className={stringify(classNames.popper, portalClassName, styled.portal.className)}
        style={{
          ...styled.portal.style,
          ...portalStyle,
          "--color-surface-container": theme.colors["surface-container"],
        }}
      >
        <div
          ref={floatableRef}
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
