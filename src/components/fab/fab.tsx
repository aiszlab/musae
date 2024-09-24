import React, { useRef } from "react";
import { DndContext, Modifier } from "@dnd-kit/core";
import Floatable from "./floatable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useEvent, useIdentity } from "@aiszlab/relax";
import type { FabProps, FloatableRef } from "musae/types/fab";
import { useContainer } from "../../hooks/use-container";

const Fab = ({ container, children }: FabProps) => {
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

export default Fab;
