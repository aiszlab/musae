import { clsx, useIdentity, useComposedRef } from "@aiszlab/relax";
import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import type { FloatableProps, FloatableRef } from "musae/types/fab";
import { positions } from "../theme/tokens.stylex";
import { Portal } from "../portal";
import { useContainer } from "../../hooks/use-container";
import { useClassNames } from "../../hooks/use-class-names";
import { FabClassToken } from "../../utils/class-name";
import { IconButton } from "../icon-button";

const styles = stylex.create({
  floatable: (props: { x: number; y: number }) => ({
    position: "absolute",
    transform: `translate3d(${props.x}px, ${props.y}px, 0)`,
    willChange: "transform",
    right: 20,
    bottom: 20,
    zIndex: positions.floatable,
  }),

  fixed: {
    position: "fixed",
  },
});

const Floatable = forwardRef<FloatableRef, FloatableProps>(
  ({ container, children, onClick }, ref) => {
    const classNames = useClassNames("fab");
    const [id] = useIdentity();
    const _ref = useRef<HTMLDivElement>(null);
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id,
    });
    const floatableRef = useComposedRef<HTMLDivElement>(_ref, setNodeRef);
    const { container: _container, isDocumentBody } = useContainer({ container });

    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [clientRect, setClientRect] = useState<DOMRect>();

    useDndMonitor({
      onDragEnd: (event) => {
        setOffsetX((_offsetX) => _offsetX + event.delta.x);
        setOffsetY((_offsetY) => _offsetY + event.delta.y);
        setClientRect(_ref.current?.getBoundingClientRect());
      },
    });

    useImperativeHandle(ref, () => {
      return {
        getBoundingClientRect: () => {
          return clientRect;
        },
      };
    });

    const styled = stylex.props(
      styles.floatable({ x: offsetX + (transform?.x ?? 0), y: offsetY + (transform?.y ?? 0) }),
      isDocumentBody && styles.fixed,
    );

    return (
      <Portal container={_container}>
        <div
          ref={floatableRef}
          {...listeners}
          {...attributes}
          className={clsx(classNames[FabClassToken.Fab], styled.className)}
          style={styled.style}
        >
          <IconButton onClick={onClick}>{children}</IconButton>
        </div>
      </Portal>
    );
  },
);

export default Floatable;
