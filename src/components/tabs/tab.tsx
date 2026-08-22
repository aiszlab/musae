import styles from "./styles";
import React, { forwardRef } from "react";
import { Button } from "../button";
import type { TabItemProps } from "../../types/tabs";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useEvent } from "@aiszlab/relax";
import { useTabsContext } from "./hooks/use-tabs-context";

const Tab = forwardRef<HTMLButtonElement, TabItemProps>(({ value, onClick, label }, ref) => {
  const { classNames, size } = useTabsContext();

  const click = useEvent(() => {
    onClick(value);
  });

  const styled = $props(styles.tab.button);

  return (
    <Button
      variant="text"
      ref={ref}
      onClick={click}
      className={stringify(classNames.tab, styled.className)}
      style={styled.style}
      size={size}
    >
      {label}
    </Button>
  );
});

export default Tab;
