import React, { useCallback, useContext, useMemo } from "react";
import { Button } from "../button";
import type { TabItemProps } from "./types";
import Context from "./context";

const Item = ({ value, onClick, ...props }: TabItemProps) => {
  const contextValue = useContext(Context);

  const isActive = useMemo(() => contextValue?.activeKey === value, [contextValue?.activeKey, value]);

  const setItem = useCallback(
    (itemRef: HTMLButtonElement | null) => {
      contextValue?.setItem(value, itemRef);
    },
    [contextValue, value]
  );

  const click = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <Button variant="text" color={isActive ? "primary" : "neutral"} ref={setItem} onClick={click}>
      {props.label}
    </Button>
  );
};

export default Item;
