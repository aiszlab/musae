import styles from "./styles";
import React, { useEffect, useRef, type Key } from "react";
import { props as $props } from "@stylexjs/stylex";
import { type NavigationProps } from "../../types/tabs";
import Tab from "./tab";
import { animate } from "motion/react";
import { isUndefined, useEvent } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { useTabsContext } from "./hooks/use-tabs-context";
import { useNavigation } from "./hooks/use-navigation";

const Navigation = ({ onChange }: NavigationProps) => {
  const { activeKey, items, classNames, size } = useTabsContext();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabItemsRef = useRef<Map<Key, HTMLButtonElement | null>>(new Map());
  const { navigatorRef, tabsRef, offset, scrollNavigation, isLeadingOverflow, isTrailingOverflow } =
    useNavigation();
  const _themeColorVars = useThemeColorVars(["outline-variant", "primary"]);

  const styled = {
    navigation: $props(styles.navigation.default),
    navigator: $props(
      styles.navigator.default,
      isLeadingOverflow && styles.navigator.leading,
      isTrailingOverflow && styles.navigator.trailing,
    ),
    list: $props(styles.list.default),
    indicator: $props(styles.indicator.default, styles.indicator[size]),
  };

  // repaint indicator when activeKey or size changed
  // animate indicator to correct position & width
  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    if (isUndefined(activeKey)) return;

    const tabItem = tabItemsRef.current.get(activeKey);
    animate(indicator, {
      left: tabItem?.offsetLeft,
      width: tabItem?.clientWidth,
    });
  }, [activeKey, size]);

  // 用户手动切换`tab`选项
  // 1. 切换`tab`后，尝试滚动`tab`到中间为止
  const changeTabItem = useEvent((key: Key) => {
    const tabItem = tabItemsRef.current.get(key);

    if (tabItem) {
      scrollNavigation(tabItem.offsetLeft - (navigatorRef.current?.clientWidth ?? 0) / 2);
    }

    onChange(key);
  });

  return (
    <div
      role="tablist"
      className={stringify(classNames.navigation, styled.navigation.className)}
      style={{
        ...styled.navigation.style,
        ..._themeColorVars,
        "--offset": offset + "px",
      }}
    >
      <div
        ref={navigatorRef}
        className={stringify(classNames.navigator, styled.navigator.className)}
        style={styled.navigator.style}
      >
        <div
          ref={tabsRef}
          className={stringify(classNames.list, styled.list.className)}
          style={styled.list.style}
        >
          {items.map((item) => {
            return (
              <Tab
                key={item.key}
                value={item.key}
                label={item.label}
                onClick={changeTabItem}
                ref={(_tab) => {
                  tabItemsRef.current.set(item.key, _tab);
                }}
              />
            );
          })}

          <div
            ref={indicatorRef}
            className={stringify(classNames.indicator, styled.indicator.className)}
            style={styled.indicator.style}
          />
        </div>
      </div>

      {/* TODO: extra */}
      {/* <div></div> */}
    </div>
  );
};

export default Navigation;
