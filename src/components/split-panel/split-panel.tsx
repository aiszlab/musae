import React from "react";
import stylex from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names.component";
import Context, { CLASS_NAMES } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { SplitPanelProps } from "../../types/split-panel";
import Panel from "./panel";
import Divider from "./divider";

const styles = stylex.create({
  default: {
    width: sizes.full,
    height: sizes.full,
    display: "flex",
    alignItems: "stretch",
    boxSizing: "border-box",
    margin: spacing.none,
    padding: spacing.none,
  },
});

const SplitPanel = ({ className, style, items }: SplitPanelProps) => {
  const classNames = useClassNames(CLASS_NAMES);

  if (items.length === 0) {
    return null;
  }

  const styled = {
    default: stylex.props(styles.default, typography.body.medium),
  };

  return (
    <Context.Provider value={{ classNames }}>
      <div
        className={stringify(classNames.splitPanel, className, styled.default.className)}
        style={{
          ...styled.default.style,
          ...style,
        }}
      >
        {items.map((item, _index) => {
          return (
            <>
              <Panel key={_index}>{item}</Panel>
              {_index !== items.length - 1 && <Divider />}
            </>
          );
        })}
      </div>
    </Context.Provider>
  );
};

export default SplitPanel;
