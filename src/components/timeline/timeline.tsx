import React, { useMemo } from "react";
import Item from "./item";
import type { TimelineProps } from "musae/types/timeline";
import stylex from "@stylexjs/stylex";
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names.component";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  timeline: {
    // reset styles
    margin: spacing.none,
    padding: spacing.none,

    // apply styles
    display: "flex",
    flexDirection: "column",
  },
});

const Timeline = ({ items, mode = "right", size }: TimelineProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const total = items.length;

  const contextValue = useMemo(
    () => ({
      mode,
      max: total - 1,
      size,
      classNames,
    }),
    [mode, total, size, classNames],
  );

  const styled = stylex.props(styles.timeline);

  return (
    <Context.Provider value={contextValue}>
      <ol className={stringify(classNames.timeline, styled.className)} style={styled.style}>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              value={index}
              label={item.label}
              description={item.description}
              dot={item.dot}
            />
          );
        })}
      </ol>
    </Context.Provider>
  );
};

export default Timeline;
