import React, { type CSSProperties, useMemo, useRef, Key } from "react";
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
import Panels from "./panels";

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
};

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

  const change = useEvent((key: Key) => {
    // move indicator to active tab item
    repaint(key);
    // control state
    changeActiveKey(key);
  });

  // if there is not any item, return null
  if (items.length === 0) return null;

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
          {items.map((item) => {
            return <Tab key={item.key} value={item.key} label={item.label} onClick={change} />;
          })}

          <div
            ref={indicatorScope}
            className={clsx(classNames[TabsClassToken.Indicator], styled.indicator.className)}
            style={styled.indicator.style}
          />
        </div>

        <Panels
          activeKey={activeKey}
          activatedKeys={activatedKeys}
          destroyable={destroyable}
          forceRender={forceRender}
          items={items}
        />
      </div>
    </Context.Provider>
  );
};

export default Tabs;
