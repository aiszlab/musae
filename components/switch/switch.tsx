import React, { useCallback } from "react";
import type { Props } from "./types";
import { Wrapper } from "./styled";
import { useControlledState } from "@aiszlab/relax";

const Switch = ({ value }: Props) => {
  const [isSelected, setIsSelected] = useControlledState(value);

  const toggle = useCallback(() => {
    setIsSelected((isSelected) => !isSelected);
  }, [setIsSelected]);

  return <Wrapper aria-selected={isSelected} onClick={toggle} />;
};

export default Switch;
