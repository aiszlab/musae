import PreviewGroupContext from "./context";
import type { PreviewGroupProps, PreviewRef } from "../../../types/image";
import Preview from "./preview";
import React, { useMemo, useRef } from "react";
import { useBoolean, useCounter, useEvent } from "@aiszlab/relax";

const Group = ({ children, items }: PreviewGroupProps) => {
  const min = 0;
  const max = items.length - 1;
  const [currentAt, { add, subtract, setCount: setCurrentAt }] = useCounter(0, {
    min: 0,
    max: items.length - 1,
  });
  const [isOpen, { turnOff, turnOn }] = useBoolean();
  const ref = useRef<PreviewRef>(null);

  const source = useMemo(() => {
    return items[currentAt];
  }, [currentAt, items]);

  // when image is changed, reset styles
  const prev = useEvent(() => {
    ref.current?.reset();
    subtract();
  });
  const next = useEvent(() => {
    ref.current?.reset();
    add();
  });

  return (
    <PreviewGroupContext.Provider
      value={{
        total: items.length,
        onClick: (src) => {
          setCurrentAt(Math.max(items.indexOf(src), 0));
          turnOn();
        },
        onSwitchLeft: currentAt <= min ? void 0 : prev,
        onSwitchRight: currentAt >= max ? void 0 : next,
      }}
    >
      {children}
      {isOpen && <Preview src={source} onClose={turnOff} ref={ref} />}
    </PreviewGroupContext.Provider>
  );
};

export default Group;
