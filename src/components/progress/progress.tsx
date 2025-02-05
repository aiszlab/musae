import React from "react";
import type { ProgressProps } from "../../types/progress";
import Linear from "./linear";
import Circular from "./circular";
import { useClassNames } from "../../hooks/use-class-names.component";
import Context, { CLASS_NAMES } from "./context";

const Progress = ({ variant = "linear", value = 0 }: ProgressProps) => {
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <Context.Provider value={{ classNames }}>
      {variant === "circular" && <Circular value={value} />}
      {variant === "linear" && <Linear value={value} />}
    </Context.Provider>
  );
};

export default Progress;
