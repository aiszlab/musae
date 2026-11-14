import React from "react";
import type { ProgressProps } from "../../types/progress";
import Linear from "./linear";
import Circular from "./circular";
import { useClassNames } from "../../hooks/use-class-names";
import Context, { CLASS_NAMES } from "./context";

const Progress = ({ variant = "linear", ...props }: ProgressProps) => {
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <Context.Provider value={{ classNames }}>
      {variant === "circular" && <Circular {...props} />}
      {variant === "linear" && <Linear {...props} />}
    </Context.Provider>
  );
};

export default Progress;
