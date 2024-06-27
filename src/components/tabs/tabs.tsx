import React, { type CSSProperties, useCallback, useMemo, useRef, useState, Key } from "react";
import { isVoid, useEvent, useMounted } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import type { ContextValue, TabsProps } from "./types";
import Context from "./context";
import Tab from "./tab";
import * as stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, TabsClassToken } from "../../utils/class-name";
import clsx from "clsx";
import { useTabs } from "./hooks";

const styles = {
  tabs: stylex.create({
    navigation: (props: { outline: CSSProperties["borderBottomColor"] }) => ({
      display: "flex",
      borderBottomColor: props.outline,
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
      position: "relative",
    }),

    indicator: (props: { color: CSSProperties["backgroundColor"] }) => ({
      height: sizes.xxxxxxsmall,
      backgroundColor: props.color,
      position: "absolute",
      bottom: spacing.none,
    }),
  }),

  body: stylex.create({
    default: {
      marginTop: spacing.medium,
    },
  }),

  panel: stylex.create({
    default: {},

    active: {
      display: null,
    },

    hidden: {
      display: "none",
    },
  }),
};

const Tabs = ({
  items: _items = [],
  className,
  style,
  activeKey: _activeKey,
  defaultActiveKey,
  forceRender = false,
}: TabsProps) => {
  const { activeKey, children, items, setActiveKey, setChildren, hasChildren } = useTabs({
    items: _items,
    activeKey: _activeKey,
    defaultActiveKey,
  });
  const [indicatorScope, animateIndicatorScope] = useAnimate<HTMLDivElement>();
  const tabRefs = useRef<Map<Key, HTMLButtonElement | null>>(new Map());
  const theme = useTheme();
  const classNames = useClassNames(ComponentToken.Tabs);

  // animate indicator to correct position & width
  const repaint = useEvent((activeKey: Key) => {
    const tab = tabRefs.current.get(activeKey);

    animateIndicatorScope(indicatorScope.current, {
      left: tab?.offsetLeft,
      width: tab?.clientWidth,
    });
  });

  useMounted(() => {
    if (isVoid(activeKey)) return;
    repaint(activeKey);
  });

  /// context value
  const contextValue = useMemo<ContextValue>(() => {
    return {
      activeKey,
      setItem: (key, itemRef) => {
        tabRefs.current.set(key, itemRef);
      },
    };
  }, [activeKey]);

  const change = useCallback(
    (key: Key) => {
      // move indicator to active tab item
      repaint(key);
      // control state
      setActiveKey(key);
      setChildren((prev) => new Map(prev).set(key, items.get(key)?.children));
    },
    [setActiveKey, animateIndicatorScope, indicatorScope]
  );

  // if there is not any item, return null
  if (_items.length === 0) return null;

  const styled = {
    navigation: stylex.props(
      styles.tabs.navigation({
        outline: theme.colors[ColorToken.Outline],
      })
    ),
    indicator: stylex.props(
      styles.tabs.indicator({
        color: theme.colors[ColorToken.Primary],
      })
    ),
    body: stylex.props(styles.body.default),
  };

  return (
    <Context.Provider value={contextValue}>
      <div className={classNames[TabsClassToken.Tabs]}>
        <div
          role="tablist"
          className={clsx(classNames[TabsClassToken.TabsNavigation], className, styled.navigation.className)}
          style={{
            ...styled.navigation.style,
            ...style,
          }}
        >
          {_items.map((item) => {
            return <Tab key={item.key} value={item.key} label={item.label} onClick={change} />;
          })}

          <div
            ref={indicatorScope}
            className={clsx(classNames[TabsClassToken.Indicator], styled.indicator.className)}
            style={styled.indicator.style}
          />
        </div>

        {(children.size > 0 || (forceRender && hasChildren)) && (
          <div className={clsx(classNames[TabsClassToken.Body], styled.body.className)} style={styled.body.style}>
            {_items.map((item) => {
              // cases:
              // 1. force render, always use item self child
              // 2. lazy render, use child by collected
              const child = forceRender ? item.children : children.get(item.key);
              if (!child) return null;

              const isActive = activeKey === item.key;
              const styled = stylex.props(
                styles.panel.default,
                isActive && styles.panel.active,
                !isActive && styles.panel.hidden
              );

              return (
                <div
                  key={item.key}
                  className={clsx(classNames[TabsClassToken.Panel], styled.className)}
                  style={styled.style}
                >
                  {child}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Context.Provider>
  );
};

export default Tabs;
