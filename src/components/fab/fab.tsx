import React, { type MouseEvent as _MouseEvent, forwardRef, useRef } from "react";
import { useComposedRef, useDraggable, useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import type { FabProps } from "../../types/fab";
import { useContainer } from "../../hooks/use-container";
import { Portal } from "../portal";
import { IconButton } from "../icon-button";
import { $create, $props } from "../../utils/styles";
import { spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const styles = $create({
  button: (props: {
    movementX: number;
    movementY: number;
    insetInlineStart: number;
    insetBlockStart: number;
    isDragged: boolean;
  }) => ({
    cursor: "pointer",
    pointerEvents: "auto",
    transform: `translateX(${props.movementX}px) translateY(${props.movementY}px)`,
    insetInlineEnd: props.isDragged ? void 0 : spacing.xxlarge,
    insetBlockEnd: props.isDragged ? void 0 : spacing.xxlarge,
    insetInlineStart: props.isDragged ? props.insetInlineStart : void 0,
    insetBlockStart: props.isDragged ? props.insetBlockStart : void 0,

    // use higher selector
    ":not(#\\#)": {
      position: "absolute",
    },
  }),

  icon: {
    pointerEvents: "none",
    display: "inline-flex",
  },
});

const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ container, children, onClick: click, draggable = true, ...props }, ref) => {
    const _buttonRef = useRef<HTMLButtonElement>(null);
    const { container: _container } = useContainer({ container });
    const [draggableRef, { offsetX, offsetY, x, y, movementX, movementY, isDragged }] =
      useDraggable<HTMLButtonElement>();
    const classNames = useClassNames(CLASS_NAMES);
    const buttonRef = useComposedRef(_buttonRef, ref, draggableRef);

    const styled = {
      button: $props(
        styles.button({
          movementX,
          movementY,
          isDragged,
          insetInlineStart: x - offsetX,
          insetBlockStart: y - offsetY,
        }),
      ),
      icon: $props(styles.icon),
    };

    const onClick = useEvent((event: _MouseEvent<HTMLButtonElement>) => {
      click?.(event);
    });

    return (
      <Portal container={_container}>
        <IconButton
          ref={buttonRef}
          onClick={onClick}
          className={stringify(classNames.fab, styled.button.className)}
          style={styled.button.style}
          ripple={false}
          {...props}
        >
          <span className={styled.icon.className} style={styled.icon.style}>
            {children}
          </span>
        </IconButton>
      </Portal>
    );
  },
);

export default Fab;
