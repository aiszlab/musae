import React, { useRef } from "react";
import { DndContext, Modifier } from "@dnd-kit/core";
import Floatable from "./floatable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useEvent, useIdentity } from "@aiszlab/relax";
import type { FloatingActionButtonProps, FloatableRef } from "./types";
import { useContainer } from "../../hooks/use-container";

const FloatingActionButton = ({ container, children }: FloatingActionButtonProps) => {
  const [id] = useIdentity();
  const floatableRef = useRef<FloatableRef>(null);
  const { container: _container } = useContainer({ container });

  const modifier = useEvent<Modifier>((args) => {
    const clientRect = floatableRef.current?.getBoundingClientRect();

    return restrictToParentElement({
      ...args,
      ...(!!clientRect && {
        draggingNodeRect: clientRect,
      }),
    });
  });

  return (
    <DndContext id={id} modifiers={[modifier]}>
      <Floatable ref={floatableRef} container={_container}>
        {children}
      </Floatable>
    </DndContext>
  );
};

export default FloatingActionButton;
