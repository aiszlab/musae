import React, { useCallback, useMemo, useRef } from "react";
import { StyledTabs, StyledIndicator } from "./styled";
import { useControlledState, useMounted } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import type { ContextValue, TabsProps } from "./types";
import Context from "./context";
import Item from "./item";

const Tabs = (props: TabsProps) => {
  const [_activeKey, _setActiveKey] = useControlledState(props.activeKey, {
    defaultState: props.items[0]?.key,
  });
  const [indicatorScope, animateIndicatorScope] = useAnimate<HTMLDivElement>();
  const tabItemRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());

  useMounted(() => {
    animateIndicatorScope(indicatorScope.current, {
      width: tabItemRefs.current.get(_activeKey!)?.clientWidth,
    });
  });

  /// context value
  const contextValue = useMemo<ContextValue>(() => {
    return {
      activeKey: _activeKey,
      setItem: (key, itemRef) => {
        tabItemRefs.current.set(key, itemRef);
      },
    };
  }, [_activeKey]);

  const onItemClick = useCallback(
    (key: string) => {
      const _activeTabItem = tabItemRefs.current.get(key);

      // move indicator to active tab item
      animateIndicatorScope(indicatorScope.current, {
        left: _activeTabItem?.offsetLeft,
        width: _activeTabItem?.clientWidth,
      });

      _setActiveKey(key);
    },
    [_setActiveKey, animateIndicatorScope, indicatorScope]
  );

  /// if there is not any item, return null
  if (!props.items.length) return null;

  /// render tabs
  return (
    <Context.Provider value={contextValue}>
      <StyledTabs role="tablist">
        {props.items.map((tabItem) => {
          return <Item key={tabItem.key} value={tabItem.key} label={tabItem.label} onClick={onItemClick} />;
        })}
        <StyledIndicator ref={indicatorScope} />
      </StyledTabs>
    </Context.Provider>
  );
};

export default Tabs;
