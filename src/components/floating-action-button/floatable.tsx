import { useIdentity, useRefs } from "@aiszlab/relax";
import { useDndMonitor, useDraggable } from "@dnd-kit/core";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { Button } from "../button";
import type { FloatableProps, FloatableRef } from "./types";
import { positions } from "../theme/tokens.stylex";
import { Portal } from "../portal";
import { useContainer } from "../../hooks/use-container";

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

const Floatable = forwardRef<FloatableRef, FloatableProps>(({ container }, ref) => {
  const [id] = useIdentity();
  const _ref = useRef<HTMLDivElement>(null);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const floatableRef = useRefs<HTMLDivElement>(_ref, setNodeRef);
  const { container: _container, isBody } = useContainer({ container });

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
    isBody && styles.fixed
  );

  return (
    <Portal container={_container}>
      <div ref={floatableRef} {...listeners} {...attributes} className={styled.className} style={styled.style}>
        <Button shape="circular">1</Button>
      </div>
    </Portal>
  );
});

export default Floatable;
