import styles from "./styles";
import React, { type MouseEvent as _MouseEvent, forwardRef, useRef } from "react";
import { useComposedRef, useDraggable, useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import type { FabProps } from "../../types/fab";
import { useContainer } from "../../hooks/use-container";
import { Portal } from "../portal";
import { IconButton } from "../icon-button";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ container, children, onClick: click, ...props }, ref) => {
    const _buttonRef = useRef<HTMLButtonElement>(null);
    const { container: _container } = useContainer({ container });
    const [draggableRef, { offsetX, offsetY, x, y, movementX, movementY, isDragged }] =
      useDraggable<HTMLButtonElement>();
    const classNames = useClassNames(CLASS_NAMES);
    const buttonRef = useComposedRef(_buttonRef, ref, draggableRef);

    const styled = {
      button: $props(styles.default, isDragged && styles.dragged),
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
          style={{
            ...styled.button.style,
            "--left": `${x - offsetX}px`,
            "--top": `${y - offsetY}px`,
            "--movement-x": `${movementX}px`,
            "--movement-y": `${movementY}px`,
          }}
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
