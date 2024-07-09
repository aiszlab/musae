import React, { useRef } from "react";
import { DndContext, Modifier } from "@dnd-kit/core";
import Floatable from "./floatable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useEvent, useIdentity } from "@aiszlab/relax";
import type { FloatingActionButtonProps, FloatableRef } from "./types";

const FloatingActionButton = ({ container }: FloatingActionButtonProps) => {
  const [id] = useIdentity();
  const floatableRef = useRef<FloatableRef>(null);

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
      <Floatable ref={floatableRef} />
    </DndContext>
  );
};

export default FloatingActionButton;
