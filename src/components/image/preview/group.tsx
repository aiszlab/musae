import PreviewGroupContext from "./context";
import type { PreviewGroupProps } from "../types";
import Preview from "./preview";
import React, { useMemo } from "react";
import { useBoolean, useCounter } from "@aiszlab/relax";

const Group = ({ children, items }: PreviewGroupProps) => {
  const [currentAt, { add, subtract, setCount: setCurrentAt }] = useCounter(0, { min: 0, max: items.length - 1 });
  const [isVisible, { turnOff, turnOn }] = useBoolean();

  const source = useMemo(() => {
    return items[currentAt];
  }, [currentAt, items]);

  console.log("currentAt====", currentAt);
  console.log("source=====", source);

  return (
    <PreviewGroupContext.Provider
      value={{
        total: items.length,
        onClick: (src) => {
          setCurrentAt(Math.max(items.indexOf(src), 0));
          turnOn();
        },
        onSwitchLeft: subtract,
        onSwitchRight: add,
      }}
    >
      {children}
      {isVisible && <Preview src={source} onClose={turnOff} />}
    </PreviewGroupContext.Provider>
  );
};

export default Group;
