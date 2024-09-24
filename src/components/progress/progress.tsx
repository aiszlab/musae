import React from "react";
import type { ProgressProps } from "musae/types/progress";
import Linear from "./linear";
import Circular from "./circular";

const Progress = ({ variant = "linear", value = 0 }: ProgressProps) => {
  if (variant === "circular") {
    return <Circular value={value} />;
  }

  return <Linear value={value} />;
};

export default Progress;
