import React, { useMemo } from "react";
import Item from "./item";
import type { ContextValue, TimelineProps } from "musae/types/timeline";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TimelineClassToken } from "../../utils/class-name";
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
  const classNames = useClassNames("timeline");
  const total = items.length;

  const contextValue = useMemo<ContextValue>(
    () => ({
      mode,
      max: total - 1,
      size,
    }),
    [mode, total, size],
  );

  const styled = stylex.props(styles.timeline);

  return (
    <Context.Provider value={contextValue}>
      <ol
        className={stringify(classNames[TimelineClassToken.Timeline], styled.className)}
        style={styled.style}
      >
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
