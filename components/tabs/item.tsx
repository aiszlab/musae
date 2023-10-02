import React, { useCallback, useContext, useMemo } from "react";
import { Button } from "../button";
import type { TabItemProps } from "./types";
import Context from "./context";

const Item = (props: TabItemProps) => {
  const contextValue = useContext(Context);

  const isActive = useMemo(() => contextValue?.activeKey === props.value, [contextValue?.activeKey, props.value]);
  const setItem = useCallback((itemRef: HTMLButtonElement | null) => {
    contextValue?.setItem(props.value, itemRef);
  }, []);

  const click = useCallback(() => {
    props.onClick(props.value);
  }, [props.value]);

  return (
    <Button variant="text" color={isActive ? "primary" : "neutral"} ref={setItem} onClick={click}>
      {props.label}
    </Button>
  );
};

export default Item;
