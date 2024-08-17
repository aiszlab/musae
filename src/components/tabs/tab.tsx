import React, { forwardRef, useCallback, useContext } from "react";
import { Button } from "../button";
import type { TabItemProps } from "./types";
import Context from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TabsClassToken } from "../../utils/class-name";
import { ComponentToken } from "../../utils/component-token";

const Tab = forwardRef<HTMLButtonElement, TabItemProps>(({ value, onClick, label }, ref) => {
  const { activeKey } = useContext(Context) ?? {};
  const isActive = activeKey === value;
  const classNames = useClassNames(ComponentToken.Tabs);

  const click = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <Button
      variant="text"
      color={isActive ? "primary" : "secondary"}
      ref={ref}
      onClick={click}
      className={classNames[TabsClassToken.Tab]}
      ripple={false}
      style={{
        borderRadius: "10% 10% 0 0",
      }}
    >
      {label}
    </Button>
  );
});

export default Tab;
