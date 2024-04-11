import PreviewGroupContext from "./context";
import type { PreviewGroupProps } from "../types";
import Preview from "./preview";
import React, { useState, useMemo } from "react";
import { useBoolean } from "@aiszlab/relax";

const Group = ({ children, items }: PreviewGroupProps) => {
  const [currentAt, setCurrentAt] = useState(0);
  const [isVisible, { turnOff, turnOn }] = useBoolean();

  const source = useMemo(() => {
    return items[currentAt];
  }, [currentAt]);

  return (
    <PreviewGroupContext.Provider
      value={{
        total: items.length,
        onClick: (src) => {
          setCurrentAt(Math.min(items.indexOf(src), 0));
          turnOn();
        },
      }}
    >
      {children}
      {isVisible && <Preview src={source} onClose={turnOff} />}
    </PreviewGroupContext.Provider>
  );
};

export default Group;
