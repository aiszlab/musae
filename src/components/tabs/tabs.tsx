import React, { useMemo } from "react";
import type { TabsProps } from "musae/types/tabs";
import { Context, CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names.component";
import { stringify } from "@aiszlab/relax/class-name";
import { useTabs } from "./hooks";
import Panels from "./panels";
import Navigation from "./navigation";

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

  const classNames = useClassNames(CLASS_NAMES);

  // context value
  const contextValue = useMemo(() => {
    return {
      activeKey,
      items,
      classNames,
    };
  }, [activeKey, items, classNames]);

  // if there is not any item, return null
  if (items.length === 0) return null;

  return (
    <Context.Provider value={contextValue}>
      <div className={stringify(classNames.tabs, className)} style={style}>
        <Navigation onChange={changeActiveKey} />
        <Panels activatedKeys={activatedKeys} destroyable={destroyable} forceRender={forceRender} />
      </div>
    </Context.Provider>
  );
};

export default Tabs;
