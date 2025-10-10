import React, { useEffect, useRef, type Key } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { type NavigationProps } from "../../types/tabs";
import Tab from "./tab";
import { animate } from "motion/react";
import { isUndefined } from "@aiszlab/relax";
import { useNavigation, useNavigatorScroll, useTabsContext } from "./hooks";
import { stringify } from "@aiszlab/relax/class-name";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = {
  navigation: $create({
    default: {
      borderBottomColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
    },
  }),

  navigator: $create({
    default: {
      position: "relative",
      overflow: "hidden",
    },

    leading: {
      "::before": {
        content: "''",
        position: "absolute",
        insetBlock: 0,
        insetInlineStart: 0,
        pointerEvents: "none",
        width: sizes.medium,
        boxShadow: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      },
    },

    trailing: {
      "::after": {
        content: "''",
        position: "absolute",
        insetBlock: 0,
        insetInlineEnd: 0,
        pointerEvents: "none",
        width: sizes.medium,
        boxShadow: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      },
    },
  }),

  list: $create({
    default: {
      display: "flex",
      width: "fit-content",
      transform: "translateX(var(--offset))",
    },
  }),

  indicator: $create({
    default: {
      height: sizes.xxxxxxxxxxsmall,
      backgroundColor: "var(--color-primary)" satisfies ThemeColorVariable,
      position: "absolute",
      bottom: spacing.none,
    },
  }),
};

const Navigation = ({ onChange }: NavigationProps) => {
  const { activeKey, items, classNames } = useTabsContext();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabItemsRef = useRef<Map<Key, HTMLButtonElement | null>>(new Map());
  const { navigatorRef, tabsRef, scroll, offset, isLeadingOverflow, isTrailingOverflow } =
    useNavigation();
  const _themeColorVars = useThemeColorVars(["outline-variant", "primary"]);

  // control tabs scroll
  useNavigatorScroll({ navigatorRef, scroll });

  const styled = {
    navigation: $props(styles.navigation.default),
    navigator: $props(
      styles.navigator.default,
      isLeadingOverflow && styles.navigator.leading,
      isTrailingOverflow && styles.navigator.trailing,
    ),
    list: $props(styles.list.default),
    indicator: $props(styles.indicator.default),
  };

  // repaint indicator when activeKey changed
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
  }, [activeKey]);

  return (
    <div
      role="tablist"
      className={stringify(classNames.navigation, styled.navigation.className)}
      style={{
        ...styled.navigation.style,
        ..._themeColorVars,
        "--offset": offset,
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
                onClick={onChange}
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
