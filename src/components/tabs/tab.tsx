import React, { forwardRef, useCallback } from "react";
import { Button } from "../button";
import type { TabItemProps } from "../../types/tabs";
import { useTabsContext } from "./hooks";
import { $create, $props } from "../../utils/styles";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  button: {
    ":not(#\\#)": {
      borderRadius: "10% 10% 0 0",
    },
  },
});

const Tab = forwardRef<HTMLButtonElement, TabItemProps>(({ value, onClick, label }, ref) => {
  const { activeKey, classNames } = useTabsContext();
  const isActive = activeKey === value;

  const click = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  const styled = $props(styles.button);

  return (
    <Button
      variant="text"
      color={isActive ? "primary" : "secondary"}
      ref={ref}
      onClick={click}
      className={stringify(classNames.tab, styled.className)}
      ripple={false}
      style={styled.style}
    >
      {label}
    </Button>
  );
});

export default Tab;
