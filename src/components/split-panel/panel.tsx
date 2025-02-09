import React, { useContext } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";
import type { PanelProps } from "../../types/split-panel";
import Divider from "./divider";

const styles = stylex.create({
  default: {
    flexBasis: "calc(var(--unsized-item-space))",
    flexGrow: 0,
  },

  sized: {
    flexBasis: "var(--sized-item-space)",
  },

  last: {
    flexBasis: "calc(var(--last-item-space))",
  },
});

const Panel = ({ children, last, defaultSize }: PanelProps) => {
  const { classNames } = useContext(Context);
  const isSized = !!defaultSize;

  const styled = {
    default: stylex.props(styles.default, isSized && styles.sized, last && styles.last),
  };

  return (
    <>
      <div
        className={stringify(classNames.panel, styled.default.className)}
        // @ts-expect-error
        style={{
          ...styled.default.style,
          ...(isSized && {
            "--sized-item-space": defaultSize,
          }),
        }}
      >
        {children}
      </div>

      {/* split bar */}
      {!last && <Divider />}
    </>
  );
};

export default Panel;
