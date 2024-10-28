import React, { useEffect, useRef, type CSSProperties, type Key } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { TabsClassToken } from "../../utils/class-name";
import { type NavigationProps } from "musae/types/tabs";
import Tab from "./tab";
import { useAnimate } from "framer-motion";
import { isUndefined } from "@aiszlab/relax";
import { useTheme } from "../theme";
import { useNavigation, useNavigatorScroll, useTabsContext } from "./hooks";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  navigation: stylex.create({
    default: (props: { outlineColor: CSSProperties["borderBottomColor"] }) => ({
      borderBottomColor: props.outlineColor,
      borderBottomWidth: sizes.smallest,
      borderBottomStyle: "solid",
    }),
  }),

  navigator: stylex.create({
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

  list: stylex.create({
    default: (props: { offset: number }) => ({
      display: "flex",
      width: "fit-content",
      transform: `translateX(-${props.offset}px)`,
    }),
  }),

  indicator: stylex.create({
    default: (props: { color: CSSProperties["backgroundColor"] }) => ({
      height: sizes.xxxxxxsmall,
      backgroundColor: props.color,
      position: "absolute",
      bottom: spacing.none,
    }),
  }),
};

const Navigation = ({ onChange }: NavigationProps) => {
  const { activeKey, items } = useTabsContext();
  const classNames = useClassNames("tabs");
  const [indicatorRef, animateIndicator] = useAnimate<HTMLDivElement>();
  const tabRefs = useRef<Map<Key, HTMLButtonElement | null>>(new Map());
  const theme = useTheme();
  const { navigatorRef, tabsRef, scroll, offset, isLeadingOverflow, isTrailingOverflow } =
    useNavigation();

  // control tabs scroll
  useNavigatorScroll({ navigatorRef, scroll });

  const styled = {
    navigation: stylex.props(
      styles.navigation.default({
        outlineColor: theme.colors["outline-variant"],
      }),
    ),
    navigator: stylex.props(
      styles.navigator.default,
      isLeadingOverflow && styles.navigator.leading,
      isTrailingOverflow && styles.navigator.trailing,
    ),
    list: stylex.props(styles.list.default({ offset })),
    indicator: stylex.props(
      styles.indicator.default({
        color: theme.colors.primary,
      }),
    ),
  };

  // repaint indicator when activeKey changed
  // animate indicator to correct position & width
  useEffect(() => {
    if (isUndefined(activeKey)) return;

    const tab = tabRefs.current.get(activeKey);

    animateIndicator(indicatorRef.current, {
      left: tab?.offsetLeft,
      width: tab?.clientWidth,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  return (
    <div
      role="tablist"
      className={stringify(classNames[TabsClassToken.TabsNavigation], styled.navigation.className)}
      style={styled.navigation.style}
    >
      <div
        ref={navigatorRef}
        className={stringify(classNames[TabsClassToken.TabsNavigator], styled.navigator.className)}
        style={styled.navigator.style}
      >
        <div
          ref={tabsRef}
          className={stringify(classNames[TabsClassToken.TabList], styled.list.className)}
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
                  tabRefs.current.set(item.key, _tab);
                }}
              />
            );
          })}

          <div
            ref={indicatorRef}
            className={stringify(classNames[TabsClassToken.Indicator], styled.indicator.className)}
            style={styled.indicator.style}
          />
        </div>
      </div>

      {/* extra */}
      <div></div>
    </div>
  );
};

export default Navigation;
