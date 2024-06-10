import React from "react";
import type { ProgressProps } from "./types";
import Linear from "./linear";
import Circular from "./circular";

const Progress = ({ variant = "linear", value = 0 }: ProgressProps) => {
  if (variant === "circular") {
    return <Circular value={value} />;
  }

  return <Linear value={value} />;
};

export default Progress;
