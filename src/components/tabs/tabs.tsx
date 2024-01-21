import React, { CSSProperties, useCallback, useMemo, useRef } from "react";
import { useControlledState, useMounted } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import type { ContextValue, TabsProps } from "./types";
import Context from "./context";
import Item from "./item";
import * as stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../config";
import { ComponentToken, TabsClassToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  tabs: (props: { outline: CSSProperties["borderBottomColor"] }) => ({
    display: "flex",
    borderBottomColor: props.outline,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    position: "relative",
  }),

  indicator: (props: { indicatorColor: CSSProperties["backgroundColor"] }) => ({
    height: "2px",
    backgroundColor: props.indicatorColor,
    position: "absolute",
    bottom: spacing.none,
  }),
});

const Tabs = (props: TabsProps) => {
  const [_activeKey, _setActiveKey] = useControlledState(props.activeKey, {
    defaultState: props.items[0]?.key,
  });
  const [indicatorScope, animateIndicatorScope] = useAnimate<HTMLDivElement>();
  const tabItemRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Tabs);

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

  const styled = {
    tabs: stylex.props(
      styles.tabs({
        outline: theme.colors[ColorToken.Outline],
      })
    ),
    indicator: stylex.props(
      styles.indicator({
        indicatorColor: theme.colors[ColorToken.Primary],
      })
    ),
  };

  /// render tabs
  return (
    <Context.Provider value={contextValue}>
      <div
        role="tablist"
        className={clsx(classNames[TabsClassToken.Tabs], styled.tabs.className, props.className)}
        style={{
          ...styled.tabs.style,
          ...props.style,
        }}
      >
        {props.items.map((tabItem) => {
          return <Item key={tabItem.key} value={tabItem.key} label={tabItem.label} onClick={onItemClick} />;
        })}
        <div
          ref={indicatorScope}
          className={clsx(classNames[TabsClassToken.Indicator], styled.indicator.className)}
          style={styled.indicator.style}
        />
      </div>
    </Context.Provider>
  );
};

export default Tabs;
