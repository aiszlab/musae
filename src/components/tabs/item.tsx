import React, { useCallback, useContext } from "react";
import { Button } from "../button";
import type { TabItemProps } from "./types";
import Context from "./context";
import { useClassNames } from "../config";
import { ComponentToken, TabsClassToken } from "../../utils/class-name";

const Item = ({ value, onClick, ...props }: TabItemProps) => {
  const contextValue = useContext(Context);
  const isActive = contextValue?.activeKey === value;
  const classNames = useClassNames(ComponentToken.Tabs);

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
    <Button
      variant="text"
      color={isActive ? "primary" : "tertiary"}
      ref={setItem}
      onClick={click}
      className={classNames[TabsClassToken.Item]}
    >
      {props.label}
    </Button>
  );
};

export default Item;
