import React, { type MouseEvent as _MouseEvent, useCallback, useRef } from "react";
import { clsx, useDrag, useEvent } from "@aiszlab/relax";
import { contains } from "@aiszlab/relax/dom";
import type { FabProps } from "musae/types/fab";
import { useContainer } from "../../hooks/use-container";
import { Portal } from "../portal";
import { IconButton } from "../icon-button";
import stylex from "@stylexjs/stylex";
import { positions } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names.component";
import { CLASS_NAMES } from "./context";

const styles = stylex.create({
  portal: {
    overflow: "hidden",
    inset: 0,
    zIndex: positions.fab,
  },

  fixed: {
    position: "fixed",
  },

  disable: {
    pointerEvents: "none",
  },

  button: (props: {
    movementX: number;
    movementY: number;
    insetInlineStart: number;
    insetBlockStart: number;
    isDragged: boolean;
  }) => ({
    cursor: "pointer",
    right: 20,
    bottom: 20,
    pointerEvents: "auto",
    transform: `translateX(${props.movementX}px) translateY(${props.movementY}px)`,
    insetInlineEnd: props.isDragged ? void 0 : 20,
    insetBlockEnd: props.isDragged ? void 0 : 20,
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

const Fab = ({ container, children, onClick: click }: FabProps) => {
  const portalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { container: _container } = useContainer({ container });
  const [
    { isDragging, offsetX, offsetY, x, y, movementX, movementY, isDragged },
    { onDragEnd, onDragMove, onDragStart: dragStart },
  ] = useDrag();
  const classNames = useClassNames(CLASS_NAMES);

  const styled = {
    portal: stylex.props(styles.fixed, styles.portal, !isDragging && styles.disable),
    button: stylex.props(
      styles.button({
        movementX,
        movementY,
        isDragged,
        insetInlineStart: x - offsetX,
        insetBlockStart: y - offsetY,
      }),
    ),
    icon: stylex.props(styles.icon),
  };

  const onDragStart = useCallback(
    (event: _MouseEvent<HTMLDivElement>) => {
      if (!contains(buttonRef.current, event.target)) return;
      event.stopPropagation();
      dragStart(event);
    },
    [dragStart],
  );

  const onClick = useEvent((event: _MouseEvent<HTMLButtonElement>) => {
    console.log("11111");

    if (isDragging) return;
    click?.(event);
  });

  return (
    <Portal container={_container}>
      <div
        ref={portalRef}
        onMouseDown={onDragStart}
        onMouseUp={(e) => {
          console.log("uuuuuuuuu");
          e.preventDefault();
          e.stopPropagation();
          onDragEnd(e);
        }}
        onMouseMove={isDragging ? onDragMove : void 0}
        className={clsx(classNames.fab, styled.portal.className)}
        style={styled.portal.style}
      >
        <IconButton
          ref={buttonRef}
          onClick={onClick}
          className={styled.button.className}
          style={styled.button.style}
        >
          <span className={styled.icon.className} style={styled.icon.style}>
            {children}
          </span>
        </IconButton>
      </div>
    </Portal>
  );
};

export default Fab;
