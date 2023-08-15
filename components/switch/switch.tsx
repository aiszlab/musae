import React, { useState } from "react";
import type { Props } from "./types";
import Wrapper from "./wrapper";

const Switch = ({ value }: Props) => {
  /// TODO in develop, use controlled state
  const [isSelected, setIsSelected] = useState<boolean>();

  return (
    <Wrapper
      aria-selected={isSelected}
      onClick={() => {
        setIsSelected((isSelected) => !isSelected);
      }}
    />
  );
};

export default Switch;
