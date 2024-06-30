import React, { type Key, type ReactNode, useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, TabsClassToken } from "../../utils/class-name";
import { type PanelsProps } from "./types";
import clsx from "clsx";
import { isUndefined, isVoid } from "@aiszlab/relax";
import { useTabsContext } from "./hooks";

const styles = {
  panels: stylex.create({
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

const Panels = ({ forceRender, destroyable, activatedKeys }: PanelsProps) => {
  const { items, activeKey } = useTabsContext();
  const classNames = useClassNames(ComponentToken.Tabs);
  const styled = {
    panels: stylex.props(styles.panels.default),
    panel: {
      active: stylex.props(styles.panel.default, styles.panel.active),
      hidden: stylex.props(styles.panel.default, styles.panel.hidden),
    },
  };

  const panels = useMemo<Array<[Key, ReactNode]>>(() => {
    if (isUndefined(activeKey)) {
      return [];
    }

    if (destroyable) {
      return [[activeKey, items.find((item) => item.key === activeKey)?.children]];
    }

    if (forceRender) {
      return items.map((item) => [item.key, item.children]);
    }

    return items.map((item) => [item.key, activatedKeys.has(item.key) ? item.children : null]);
  }, [destroyable, forceRender, items, activeKey, activatedKeys]);

  return (
    <div className={clsx(classNames[TabsClassToken.Panels], styled.panels.className)} style={styled.panels.style}>
      {panels.map(([key, children]) => {
        const { className, style } = key === activeKey ? styled.panel.active : styled.panel.hidden;

        if (isVoid(children)) {
          return null;
        }

        return (
          <div key={key} className={clsx(classNames[TabsClassToken.Panel], className)} style={style}>
            {children}
          </div>
        );
      })}
    </div>
  );
};

export default Panels;
