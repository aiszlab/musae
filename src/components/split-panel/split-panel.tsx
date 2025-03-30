import React from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import Context, { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { SplitPanelProps } from "../../types/split-panel";
import Panel from "./panel";
import { usePanels } from "./hooks";

const styles = $create({
  default: {
    width: sizes.full,
    height: sizes.full,
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "stretch",
    boxSizing: "border-box",
    margin: spacing.none,
    padding: spacing.none,
  },

  horizontal: {
    flexDirection: "row",
  },

  vertical: {
    flexDirection: "column",
  },
});

const SplitPanel = ({ className, style, items, orientation = "horizontal" }: SplitPanelProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const { panels, unsizedItemSpace, collect, ref: panelsRef } = usePanels({ items });

  if (panels.length === 0) {
    return null;
  }

  const styled = $props(styles.default, styles[orientation], typography.body.medium);

  return (
    <Context.Provider value={{ classNames, orientation, panelsRef }}>
      <div
        className={stringify(classNames.splitPanel, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
          // @ts-expect-error style vars
          "--unsized-item-space": unsizedItemSpace,
        }}
      >
        {panels.map((panelProps, index) => {
          return (
            <Panel {...panelProps} key={index} ref={(_ref) => collect(_ref, index)}>
              {panelProps.children ?? items[index].children}
            </Panel>
          );
        })}
      </div>
    </Context.Provider>
  );
};

export default SplitPanel;
