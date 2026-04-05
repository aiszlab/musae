import React, { type Key, type ReactNode, useMemo } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { type PanelsProps } from "../../types/tabs";
import { stringify } from "@aiszlab/relax/class-name";
import { isUndefined, isVoid } from "@aiszlab/relax";
import { useTabsContext } from "./hooks";

const styles = {
  panels: $create({
    default: {
      marginBlockStart: spacing.xxxlarge,
    },
  }),

  panel: $create({
    hidden: {
      display: "none",
    },
  }),
};

const Panels = ({ forceRender, destroyable, activatedKeys }: PanelsProps) => {
  const { items, activeKey, classNames } = useTabsContext();

  // 收集需要渲染的面板内容
  const panels = useMemo(() => {
    let renderedPanels: Array<{ key: Key; children: ReactNode }> = [];

    if (isUndefined(activeKey)) {
      return renderedPanels;
    }

    for (const item of items) {
      if (destroyable) {
        if (item.key !== activeKey) {
          continue;
        }

        if (item.children) {
          renderedPanels.push({ key: item.key, children: item.children });
        }
        break;
      }

      if (forceRender || activatedKeys.has(item.key)) {
        if (item.children) {
          renderedPanels.push({ key: item.key, children: item.children });
        }
      }
    }

    return renderedPanels;
  }, [destroyable, forceRender, items, activeKey, activatedKeys]);

  const styled = {
    panels: $props(panels.length > 0 && styles.panels.default),
  };

  return (
    <div
      className={stringify(classNames.panels, styled.panels.className)}
      style={styled.panels.style}
    >
      {panels.map(({ key, children }) => {
        const isActive = key === activeKey;
        const panelStyled = $props(!isActive && styles.panel.hidden);

        return (
          <div
            key={key}
            className={stringify(classNames.panel, panelStyled.className)}
            style={panelStyled.style}
          >
            {children}
          </div>
        );
      })}
    </div>
  );
};

export default Panels;
