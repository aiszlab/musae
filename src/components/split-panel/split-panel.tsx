import styles from "./styles";
import React from "react";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import Context, { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { SplitPanelProps } from "../../types/split-panel";
import Panel from "./panel";
import { usePanels } from "./hooks";
import { $body } from "../theme/theme";

const SplitPanel = ({ className, style, items, orientation = "horizontal" }: SplitPanelProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const { panels, unsizedItemSpace, collect, ref: panelsRef } = usePanels({ items });

  if (panels.length === 0) {
    return null;
  }

  const styled = $props(styles.splitPanel.default, styles[orientation], $body.medium);

  return (
    <Context.Provider value={{ classNames, orientation, panelsRef }}>
      <div
        className={stringify(classNames.splitPanel, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
          "--unsized-item-space": unsizedItemSpace,
        }}
      >
        {panels.map((panelProps, index) => {
          return (
            <Panel {...panelProps} key={index} ref={(_ref) => collect(_ref, index)}>
              {items[index].children}
            </Panel>
          );
        })}
      </div>
    </Context.Provider>
  );
};

export default SplitPanel;
