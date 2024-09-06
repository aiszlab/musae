import React, { useMemo } from "react";
import type { ContextValue, TabsProps } from "./types";
import Context from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TabsClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import { useTabs } from "./hooks";
import Panels from "./panels";
import Navigation from "./navigation";
import { ComponentToken } from "../../utils/component-token";

const Tabs = ({
  items = [],
  className,
  style,
  activeKey: _activeKey,
  defaultActiveKey,
  forceRender = false,
  destroyable = false,
}: TabsProps) => {
  const { activeKey, activatedKeys, changeActiveKey } = useTabs({
    items,
    activeKey: _activeKey,
    defaultActiveKey,
  });

  const classNames = useClassNames(ComponentToken.Tabs);

  /// context value
  const contextValue = useMemo<ContextValue>(() => {
    return {
      activeKey,
      items,
    };
  }, [activeKey, items]);

  // if there is not any item, return null
  if (items.length === 0) return null;

  return (
    <Context.Provider value={contextValue}>
      <div className={clsx(classNames[TabsClassToken.Tabs], className)} style={style}>
        <Navigation onChange={changeActiveKey} />
        <Panels activatedKeys={activatedKeys} destroyable={destroyable} forceRender={forceRender} />
      </div>
    </Context.Provider>
  );
};

export default Tabs;
