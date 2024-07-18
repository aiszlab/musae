import React from "react";
import type { HighlightProps } from "./types";

const Highlight = ({ children }: HighlightProps) => {
  return <span>{children}</span>;
};

export default Highlight;
