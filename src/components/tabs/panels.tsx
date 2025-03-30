import React, { type Key, type ReactNode, useMemo } from "react";
import { $create, $props } from "../../utils/styles";
import { spacing } from "../theme/tokens.stylex";
import { type PanelsProps } from "../../types/tabs";
import { stringify } from "@aiszlab/relax/class-name";
import { isUndefined, isVoid } from "@aiszlab/relax";
import { useTabsContext } from "./hooks";

const styles = {
  panels: $create({
    default: {
      marginBlockStart: spacing.medium,
    },
  }),

  panel: $create({
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
  const { items, activeKey, classNames } = useTabsContext();
  const styled = {
    panels: $props(styles.panels.default),
    panel: {
      active: $props(styles.panel.default, styles.panel.active),
      hidden: $props(styles.panel.default, styles.panel.hidden),
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
    <div
      className={stringify(classNames.panels, styled.panels.className)}
      style={styled.panels.style}
    >
      {panels.map(([key, children]) => {
        const { className, style } = key === activeKey ? styled.panel.active : styled.panel.hidden;

        if (isVoid(children)) {
          return null;
        }

        return (
          <div key={key} className={stringify(classNames.panel, className)} style={style}>
            {children}
          </div>
        );
      })}
    </div>
  );
};

export default Panels;
